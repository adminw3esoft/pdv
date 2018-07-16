"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TiposBasicoV400Xsd_1 = require("./TiposBasicoV400Xsd");
var Model_1 = require("../../Model");
/* --------
  This is a generated file. All edits will be overwritten!
-------- */
exports.Torig = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "5", "6", "7", "8"] });
};
exports.TFinNFe = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["1", "2", "3", "4"] });
};
exports.TProcEmi = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3"] });
};
exports.TCListServ = function (value) {
    Model_1.validate(value, {
        "whiteSpace": "preserve",
        "enumeration": ["01.01", "01.02", "01.03", "01.04", "01.05", "01.06", "01.07", "01.08", "02.01", "03.02", "03.03", "03.04", "03.05", "04.01", "04.02", "04.03", "04.04", "04.05", "04.06", "04.07", "04.08", "04.09", "04.10", "04.11", "04.12", "04.13", "04.14", "04.15", "04.16", "04.17", "04.18", "04.19", "04.20", "04.21", "04.22", "04.23", "05.01", "05.02", "05.03", "05.04", "05.05", "05.06", "05.07", "05.08", "05.09", "06.01", "06.02", "06.03", "06.04", "06.05", "07.01", "07.02", "07.03", "07.04", "07.05", "07.06", "07.07", "07.08", "07.09", "07.10", "07.11", "07.12", "07.13", "07.16", "07.17", "07.18", "07.19", "07.20", "07.21", "07.22", "08.01", "08.02", "09.01", "09.02", "09.03", "10.01", "10.02", "10.03", "10.04", "10.05", "10.06", "10.07", "10.08", "10.09", "10.10", "11.01", "11.02", "11.03", "11.04", "12.01", "12.02", "12.03", "12.04", "12.05", "12.06", "12.07", "12.08", "12.09", "12.10", "12.11", "12.12", "12.13", "12.14", "12.15", "12.16", "12.17", "13.02", "13.03", "13.04", "13.05", "14.01", "14.02", "14.03", "14.04", "14.05", "14.06", "14.07", "14.08", "14.09", "14.10", "14.11", "14.12", "14.13", "15.01", "15.02", "15.03", "15.04", "15.05", "15.06", "15.07", "15.08", "15.09", "15.10", "15.11", "15.12", "15.13", "15.14", "15.15", "15.16", "15.17", "15.18", "16.01", "17.01", "17.02", "17.03", "17.04", "17.05", "17.06", "17.08", "17.09", "17.10", "17.11", "17.12", "17.13", "17.14", "17.15", "17.16", "17.17", "17.18", "17.19", "17.20", "17.21", "17.22", "17.23", "17.24", "17.25", "18.01", "19.01", "20.01", "20.02", "20.03", "21.01", "22.01", "23.01", "24.01", "25.01", "25.02", "25.03", "25.04", "26.01", "27.01", "28.01", "29.01", "30.01", "31.01", "32.01", "33.01", "34.01", "35.01", "36.01", "37.01", "38.01", "39.01", "40.01"]
    });
};
exports.TIdLote = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{1,15}" });
};
exports.TVerNFe = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "4\\.00" });
};
exports.TGuid = function (value) {
    Model_1.validate(value, {
        "whiteSpace": "preserve",
        "pattern": "[A-F0-9]{8}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{12}"
    });
};
var TNFe = /** @class */ (function () {
    function TNFe() {
    }
    Object.defineProperty(TNFe.prototype, "infNFe", {
        get: function () {
            return this._infNFe;
        },
        set: function (value) {
            this._infNFe = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe.prototype, "infNFeSupl", {
        get: function () {
            return this._infNFeSupl;
        },
        set: function (value) {
            this._infNFeSupl = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe.prototype, "undefined", {
        get: function () {
            return this._undefined;
        },
        set: function (value) {
            undefined;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe;
}());
exports.TNFe = TNFe;
var TNFe_InfNFe = /** @class */ (function () {
    function TNFe_InfNFe() {
    }
    Object.defineProperty(TNFe_InfNFe.prototype, "ide", {
        get: function () {
            return this._ide;
        },
        set: function (value) {
            this._ide = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe.prototype, "emit", {
        get: function () {
            return this._emit;
        },
        set: function (value) {
            this._emit = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe.prototype, "avulsa", {
        get: function () {
            return this._avulsa;
        },
        set: function (value) {
            this._avulsa = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe.prototype, "dest", {
        get: function () {
            return this._dest;
        },
        set: function (value) {
            this._dest = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe.prototype, "retirada", {
        get: function () {
            return this._retirada;
        },
        set: function (value) {
            undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe.prototype, "entrega", {
        get: function () {
            return this._entrega;
        },
        set: function (value) {
            undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe.prototype, "autXML", {
        get: function () {
            return this._autXML;
        },
        set: function (value) {
            this._autXML = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe.prototype, "det", {
        get: function () {
            return this._det;
        },
        set: function (value) {
            this._det = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe.prototype, "total", {
        get: function () {
            return this._total;
        },
        set: function (value) {
            this._total = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe.prototype, "transp", {
        get: function () {
            return this._transp;
        },
        set: function (value) {
            this._transp = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe.prototype, "cobr", {
        get: function () {
            return this._cobr;
        },
        set: function (value) {
            this._cobr = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe.prototype, "pag", {
        get: function () {
            return this._pag;
        },
        set: function (value) {
            this._pag = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe.prototype, "infAdic", {
        get: function () {
            return this._infAdic;
        },
        set: function (value) {
            this._infAdic = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe.prototype, "exporta", {
        get: function () {
            return this._exporta;
        },
        set: function (value) {
            this._exporta = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe.prototype, "compra", {
        get: function () {
            return this._compra;
        },
        set: function (value) {
            this._compra = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe.prototype, "cana", {
        get: function () {
            return this._cana;
        },
        set: function (value) {
            this._cana = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe.prototype, "versao", {
        get: function () {
            return this._versao;
        },
        set: function (value) {
            undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe.prototype, "Id", {
        get: function () {
            return this._Id;
        },
        set: function (value) {
            Model_1.validate(value, { "pattern": "NFe[0-9]{44}" });
            this._Id = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe;
}());
exports.TNFe_InfNFe = TNFe_InfNFe;
var TNFe_InfNFe_Ide = /** @class */ (function () {
    function TNFe_InfNFe_Ide() {
    }
    Object.defineProperty(TNFe_InfNFe_Ide.prototype, "cUF", {
        get: function () {
            return this._cUF;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCodUfIBGE(value);
            this._cUF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide.prototype, "cNF", {
        get: function () {
            return this._cNF;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{8}" });
            this._cNF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide.prototype, "natOp", {
        get: function () {
            return this._natOp;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "60" });
            this._natOp = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide.prototype, "mod", {
        get: function () {
            return this._mod;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TMod(value);
            this._mod = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide.prototype, "serie", {
        get: function () {
            return this._serie;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TSerie(value);
            this._serie = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide.prototype, "nNF", {
        get: function () {
            return this._nNF;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TNF(value);
            this._nNF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide.prototype, "dhEmi", {
        get: function () {
            return this._dhEmi;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDateTimeUTC(value);
            this._dhEmi = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide.prototype, "dhSaiEnt", {
        get: function () {
            return this._dhSaiEnt;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDateTimeUTC(value);
            this._dhSaiEnt = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide.prototype, "tpNF", {
        get: function () {
            return this._tpNF;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1"] });
            this._tpNF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide.prototype, "idDest", {
        get: function () {
            return this._idDest;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["1", "2", "3"] });
            this._idDest = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide.prototype, "cMunFG", {
        get: function () {
            return this._cMunFG;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCodMunIBGE(value);
            this._cMunFG = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide.prototype, "tpImp", {
        get: function () {
            return this._tpImp;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "5"] });
            this._tpImp = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide.prototype, "tpEmis", {
        get: function () {
            return this._tpEmis;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["1", "2", "3", "4", "5", "6", "7", "9"] });
            this._tpEmis = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide.prototype, "cDV", {
        get: function () {
            return this._cDV;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{1}" });
            this._cDV = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide.prototype, "tpAmb", {
        get: function () {
            return this._tpAmb;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TAmb(value);
            this._tpAmb = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide.prototype, "finNFe", {
        get: function () {
            return this._finNFe;
        },
        set: function (value) {
            exports.TFinNFe(value);
            this._finNFe = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide.prototype, "indFinal", {
        get: function () {
            return this._indFinal;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1"] });
            this._indFinal = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide.prototype, "indPres", {
        get: function () {
            return this._indPres;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "5", "9"] });
            this._indPres = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide.prototype, "procEmi", {
        get: function () {
            return this._procEmi;
        },
        set: function (value) {
            exports.TProcEmi(value);
            this._procEmi = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide.prototype, "verProc", {
        get: function () {
            return this._verProc;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "20" });
            this._verProc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide.prototype, "dhCont", {
        get: function () {
            return this._dhCont;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDateTimeUTC(value);
            this._dhCont = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide.prototype, "xJust", {
        get: function () {
            return this._xJust;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "15", "maxLength": "256" });
            this._xJust = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide.prototype, "NFref", {
        get: function () {
            return this._NFref;
        },
        set: function (value) {
            this._NFref = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Ide;
}());
exports.TNFe_InfNFe_Ide = TNFe_InfNFe_Ide;
var TNFe_InfNFe_Ide_NFref = /** @class */ (function () {
    function TNFe_InfNFe_Ide_NFref() {
    }
    Object.defineProperty(TNFe_InfNFe_Ide_NFref.prototype, "refNFe", {
        get: function () {
            return this._refNFe;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TChNFe(value);
            this._refNFe = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide_NFref.prototype, "refNF", {
        get: function () {
            return this._refNF;
        },
        set: function (value) {
            this._refNF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide_NFref.prototype, "refNFP", {
        get: function () {
            return this._refNFP;
        },
        set: function (value) {
            this._refNFP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide_NFref.prototype, "refCTe", {
        get: function () {
            return this._refCTe;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TChNFe(value);
            this._refCTe = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide_NFref.prototype, "refECF", {
        get: function () {
            return this._refECF;
        },
        set: function (value) {
            this._refECF = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Ide_NFref;
}());
exports.TNFe_InfNFe_Ide_NFref = TNFe_InfNFe_Ide_NFref;
var TNFe_InfNFe_Ide_NFref_RefNF = /** @class */ (function () {
    function TNFe_InfNFe_Ide_NFref_RefNF() {
    }
    Object.defineProperty(TNFe_InfNFe_Ide_NFref_RefNF.prototype, "cUF", {
        get: function () {
            return this._cUF;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCodUfIBGE(value);
            this._cUF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide_NFref_RefNF.prototype, "AAMM", {
        get: function () {
            return this._AAMM;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{2}[0]{1}[1-9]{1}|[0-9]{2}[1]{1}[0-2]{1}" });
            this._AAMM = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide_NFref_RefNF.prototype, "CNPJ", {
        get: function () {
            return this._CNPJ;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCnpj(value);
            this._CNPJ = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide_NFref_RefNF.prototype, "mod", {
        get: function () {
            return this._mod;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["01", "02"] });
            this._mod = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide_NFref_RefNF.prototype, "serie", {
        get: function () {
            return this._serie;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TSerie(value);
            this._serie = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide_NFref_RefNF.prototype, "nNF", {
        get: function () {
            return this._nNF;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TNF(value);
            this._nNF = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Ide_NFref_RefNF;
}());
exports.TNFe_InfNFe_Ide_NFref_RefNF = TNFe_InfNFe_Ide_NFref_RefNF;
var TNFe_InfNFe_Ide_NFref_RefNFP = /** @class */ (function () {
    function TNFe_InfNFe_Ide_NFref_RefNFP() {
    }
    Object.defineProperty(TNFe_InfNFe_Ide_NFref_RefNFP.prototype, "cUF", {
        get: function () {
            return this._cUF;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCodUfIBGE(value);
            this._cUF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide_NFref_RefNFP.prototype, "AAMM", {
        get: function () {
            return this._AAMM;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{2}[0]{1}[1-9]{1}|[0-9]{2}[1]{1}[0-2]{1}" });
            this._AAMM = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide_NFref_RefNFP.prototype, "CNPJ", {
        get: function () {
            return this._CNPJ;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCnpj(value);
            this._CNPJ = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide_NFref_RefNFP.prototype, "CPF", {
        get: function () {
            return this._CPF;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCpf(value);
            this._CPF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide_NFref_RefNFP.prototype, "IE", {
        get: function () {
            return this._IE;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TIeDest(value);
            this._IE = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide_NFref_RefNFP.prototype, "mod", {
        get: function () {
            return this._mod;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["01", "04"] });
            this._mod = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide_NFref_RefNFP.prototype, "serie", {
        get: function () {
            return this._serie;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TSerie(value);
            this._serie = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide_NFref_RefNFP.prototype, "nNF", {
        get: function () {
            return this._nNF;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TNF(value);
            this._nNF = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Ide_NFref_RefNFP;
}());
exports.TNFe_InfNFe_Ide_NFref_RefNFP = TNFe_InfNFe_Ide_NFref_RefNFP;
var TNFe_InfNFe_Ide_NFref_RefECF = /** @class */ (function () {
    function TNFe_InfNFe_Ide_NFref_RefECF() {
    }
    Object.defineProperty(TNFe_InfNFe_Ide_NFref_RefECF.prototype, "mod", {
        get: function () {
            return this._mod;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["2B", "2C", "2D"] });
            this._mod = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide_NFref_RefECF.prototype, "nECF", {
        get: function () {
            return this._nECF;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{1,3}" });
            this._nECF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Ide_NFref_RefECF.prototype, "nCOO", {
        get: function () {
            return this._nCOO;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{1,6}" });
            this._nCOO = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Ide_NFref_RefECF;
}());
exports.TNFe_InfNFe_Ide_NFref_RefECF = TNFe_InfNFe_Ide_NFref_RefECF;
var TNFe_InfNFe_Emit = /** @class */ (function () {
    function TNFe_InfNFe_Emit() {
    }
    Object.defineProperty(TNFe_InfNFe_Emit.prototype, "CNPJ", {
        get: function () {
            return this._CNPJ;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCnpj(value);
            this._CNPJ = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Emit.prototype, "CPF", {
        get: function () {
            return this._CPF;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCpf(value);
            this._CPF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Emit.prototype, "xNome", {
        get: function () {
            return this._xNome;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "60", "minLength": "2" });
            this._xNome = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Emit.prototype, "xFant", {
        get: function () {
            return this._xFant;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "60", "minLength": "1" });
            this._xFant = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Emit.prototype, "enderEmit", {
        get: function () {
            return this._enderEmit;
        },
        set: function (value) {
            undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Emit.prototype, "IE", {
        get: function () {
            return this._IE;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TIe(value);
            this._IE = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Emit.prototype, "IEST", {
        get: function () {
            return this._IEST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TIeST(value);
            this._IEST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Emit.prototype, "IM", {
        get: function () {
            return this._IM;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "15" });
            this._IM = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Emit.prototype, "CNAE", {
        get: function () {
            return this._CNAE;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{7}" });
            this._CNAE = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Emit.prototype, "CRT", {
        get: function () {
            return this._CRT;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["1", "2", "3"] });
            this._CRT = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Emit;
}());
exports.TNFe_InfNFe_Emit = TNFe_InfNFe_Emit;
var TNFe_InfNFe_Avulsa = /** @class */ (function () {
    function TNFe_InfNFe_Avulsa() {
    }
    Object.defineProperty(TNFe_InfNFe_Avulsa.prototype, "CNPJ", {
        get: function () {
            return this._CNPJ;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCnpj(value);
            this._CNPJ = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Avulsa.prototype, "xOrgao", {
        get: function () {
            return this._xOrgao;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "60", "minLength": "1" });
            this._xOrgao = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Avulsa.prototype, "matr", {
        get: function () {
            return this._matr;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "60" });
            this._matr = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Avulsa.prototype, "xAgente", {
        get: function () {
            return this._xAgente;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "60", "minLength": "1" });
            this._xAgente = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Avulsa.prototype, "fone", {
        get: function () {
            return this._fone;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{6,14}" });
            this._fone = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Avulsa.prototype, "UF", {
        get: function () {
            return this._UF;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TUfEmi(value);
            this._UF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Avulsa.prototype, "nDAR", {
        get: function () {
            return this._nDAR;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "60" });
            this._nDAR = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Avulsa.prototype, "dEmi", {
        get: function () {
            return this._dEmi;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TData(value);
            this._dEmi = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Avulsa.prototype, "vDAR", {
        get: function () {
            return this._vDAR;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vDAR = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Avulsa.prototype, "repEmi", {
        get: function () {
            return this._repEmi;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "60" });
            this._repEmi = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Avulsa.prototype, "dPag", {
        get: function () {
            return this._dPag;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TData(value);
            this._dPag = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Avulsa;
}());
exports.TNFe_InfNFe_Avulsa = TNFe_InfNFe_Avulsa;
var TNFe_InfNFe_Dest = /** @class */ (function () {
    function TNFe_InfNFe_Dest() {
    }
    Object.defineProperty(TNFe_InfNFe_Dest.prototype, "CNPJ", {
        get: function () {
            return this._CNPJ;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCnpj(value);
            this._CNPJ = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Dest.prototype, "CPF", {
        get: function () {
            return this._CPF;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCpf(value);
            this._CPF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Dest.prototype, "idEstrangeiro", {
        get: function () {
            return this._idEstrangeiro;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "([!-ÿ]{0}|[!-ÿ]{5,20})?" });
            this._idEstrangeiro = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Dest.prototype, "xNome", {
        get: function () {
            return this._xNome;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "60", "minLength": "2" });
            this._xNome = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Dest.prototype, "enderDest", {
        get: function () {
            return this._enderDest;
        },
        set: function (value) {
            undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Dest.prototype, "indIEDest", {
        get: function () {
            return this._indIEDest;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["1", "2", "9"] });
            this._indIEDest = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Dest.prototype, "IE", {
        get: function () {
            return this._IE;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TIeDestNaoIsento(value);
            this._IE = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Dest.prototype, "ISUF", {
        get: function () {
            return this._ISUF;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{8,9}" });
            this._ISUF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Dest.prototype, "IM", {
        get: function () {
            return this._IM;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "15" });
            this._IM = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Dest.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "minLength": "1", "maxLength": "60" });
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Dest;
}());
exports.TNFe_InfNFe_Dest = TNFe_InfNFe_Dest;
var TNFe_InfNFe_AutXML = /** @class */ (function () {
    function TNFe_InfNFe_AutXML() {
    }
    Object.defineProperty(TNFe_InfNFe_AutXML.prototype, "CNPJ", {
        get: function () {
            return this._CNPJ;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCnpj(value);
            this._CNPJ = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_AutXML.prototype, "CPF", {
        get: function () {
            return this._CPF;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCpf(value);
            this._CPF = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_AutXML;
}());
exports.TNFe_InfNFe_AutXML = TNFe_InfNFe_AutXML;
var TNFe_InfNFe_Det = /** @class */ (function () {
    function TNFe_InfNFe_Det() {
    }
    Object.defineProperty(TNFe_InfNFe_Det.prototype, "prod", {
        get: function () {
            return this._prod;
        },
        set: function (value) {
            this._prod = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det.prototype, "imposto", {
        get: function () {
            return this._imposto;
        },
        set: function (value) {
            this._imposto = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det.prototype, "impostoDevol", {
        get: function () {
            return this._impostoDevol;
        },
        set: function (value) {
            this._impostoDevol = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det.prototype, "infAdProd", {
        get: function () {
            return this._infAdProd;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "500" });
            this._infAdProd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det.prototype, "nItem", {
        get: function () {
            return this._nItem;
        },
        set: function (value) {
            Model_1.validate(value, {
                "whiteSpace": "preserve",
                "pattern": "[1-9]{1}[0-9]{0,1}|[1-8]{1}[0-9]{2}|[9]{1}[0-8]{1}[0-9]{1}|[9]{1}[9]{1}[0]{1}"
            });
            this._nItem = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det;
}());
exports.TNFe_InfNFe_Det = TNFe_InfNFe_Det;
var TNFe_InfNFe_Det_Prod = /** @class */ (function () {
    function TNFe_InfNFe_Det_Prod() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "cProd", {
        get: function () {
            return this._cProd;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "60", "minLength": "1" });
            this._cProd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "cEAN", {
        get: function () {
            return this._cEAN;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "SEM GTIN|[0-9]{0}|[0-9]{8}|[0-9]{12,14}" });
            this._cEAN = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "xProd", {
        get: function () {
            return this._xProd;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "120", "minLength": "1" });
            this._xProd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "NCM", {
        get: function () {
            return this._NCM;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{2}|[0-9]{8}" });
            this._NCM = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "NVE", {
        get: function () {
            return this._NVE;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[A-Z]{2}[0-9]{4}" });
            this._NVE = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "CEST", {
        get: function () {
            return this._CEST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{7}" });
            this._CEST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "indEscala", {
        get: function () {
            return this._indEscala;
        },
        set: function (value) {
            Model_1.validate(value, { "enumeration": ["S", "N"] });
            this._indEscala = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "CNPJFab", {
        get: function () {
            return this._CNPJFab;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCnpj(value);
            this._CNPJFab = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "cBenef", {
        get: function () {
            return this._cBenef;
        },
        set: function (value) {
            Model_1.validate(value, {});
            this._cBenef = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "EXTIPI", {
        get: function () {
            return this._EXTIPI;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{2,3}" });
            this._EXTIPI = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "CFOP", {
        get: function () {
            return this._CFOP;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[1,2,3,5,6,7]{1}[0-9]{3}" });
            this._CFOP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "uCom", {
        get: function () {
            return this._uCom;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "6", "minLength": "1" });
            this._uCom = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "qCom", {
        get: function () {
            return this._qCom;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1104v(value);
            this._qCom = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "vUnCom", {
        get: function () {
            return this._vUnCom;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1110v(value);
            this._vUnCom = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "vProd", {
        get: function () {
            return this._vProd;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vProd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "cEANTrib", {
        get: function () {
            return this._cEANTrib;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "SEM GTIN|[0-9]{0}|[0-9]{8}|[0-9]{12,14}" });
            this._cEANTrib = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "uTrib", {
        get: function () {
            return this._uTrib;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "6", "minLength": "1" });
            this._uTrib = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "qTrib", {
        get: function () {
            return this._qTrib;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1104v(value);
            this._qTrib = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "vUnTrib", {
        get: function () {
            return this._vUnTrib;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1110v(value);
            this._vUnTrib = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "vFrete", {
        get: function () {
            return this._vFrete;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vFrete = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "vSeg", {
        get: function () {
            return this._vSeg;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vSeg = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "vDesc", {
        get: function () {
            return this._vDesc;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vDesc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "vOutro", {
        get: function () {
            return this._vOutro;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vOutro = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "indTot", {
        get: function () {
            return this._indTot;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1"] });
            this._indTot = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "DI", {
        get: function () {
            return this._DI;
        },
        set: function (value) {
            this._DI = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "detExport", {
        get: function () {
            return this._detExport;
        },
        set: function (value) {
            this._detExport = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "xPed", {
        get: function () {
            return this._xPed;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "15" });
            this._xPed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "nItemPed", {
        get: function () {
            return this._nItemPed;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{1,6}" });
            this._nItemPed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "nFCI", {
        get: function () {
            return this._nFCI;
        },
        set: function (value) {
            exports.TGuid(value);
            this._nFCI = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "rastro", {
        get: function () {
            return this._rastro;
        },
        set: function (value) {
            this._rastro = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "veicProd", {
        get: function () {
            return this._veicProd;
        },
        set: function (value) {
            this._veicProd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "med", {
        get: function () {
            return this._med;
        },
        set: function (value) {
            this._med = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "arma", {
        get: function () {
            return this._arma;
        },
        set: function (value) {
            this._arma = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "comb", {
        get: function () {
            return this._comb;
        },
        set: function (value) {
            this._comb = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod.prototype, "nRECOPI", {
        get: function () {
            return this._nRECOPI;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "maxLength": "20", "pattern": "[0-9]{20}" });
            this._nRECOPI = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Prod;
}());
exports.TNFe_InfNFe_Det_Prod = TNFe_InfNFe_Det_Prod;
var TNFe_InfNFe_Det_Prod_DI = /** @class */ (function () {
    function TNFe_InfNFe_Det_Prod_DI() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Prod_DI.prototype, "nDI", {
        get: function () {
            return this._nDI;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "12" });
            this._nDI = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_DI.prototype, "dDI", {
        get: function () {
            return this._dDI;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TData(value);
            this._dDI = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_DI.prototype, "xLocDesemb", {
        get: function () {
            return this._xLocDesemb;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "60" });
            this._xLocDesemb = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_DI.prototype, "UFDesemb", {
        get: function () {
            return this._UFDesemb;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TUfEmi(value);
            this._UFDesemb = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_DI.prototype, "dDesemb", {
        get: function () {
            return this._dDesemb;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TData(value);
            this._dDesemb = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_DI.prototype, "tpViaTransp", {
        get: function () {
            return this._tpViaTransp;
        },
        set: function (value) {
            Model_1.validate(value, {
                "whiteSpace": "preserve",
                "enumeration": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
            });
            this._tpViaTransp = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_DI.prototype, "vAFRMM", {
        get: function () {
            return this._vAFRMM;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vAFRMM = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_DI.prototype, "tpIntermedio", {
        get: function () {
            return this._tpIntermedio;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["1", "2", "3"] });
            this._tpIntermedio = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_DI.prototype, "CNPJ", {
        get: function () {
            return this._CNPJ;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCnpj(value);
            this._CNPJ = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_DI.prototype, "UFTerceiro", {
        get: function () {
            return this._UFTerceiro;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TUfEmi(value);
            this._UFTerceiro = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_DI.prototype, "cExportador", {
        get: function () {
            return this._cExportador;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "60" });
            this._cExportador = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_DI.prototype, "adi", {
        get: function () {
            return this._adi;
        },
        set: function (value) {
            this._adi = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Prod_DI;
}());
exports.TNFe_InfNFe_Det_Prod_DI = TNFe_InfNFe_Det_Prod_DI;
var TNFe_InfNFe_Det_Prod_DI_Adi = /** @class */ (function () {
    function TNFe_InfNFe_Det_Prod_DI_Adi() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Prod_DI_Adi.prototype, "nAdicao", {
        get: function () {
            return this._nAdicao;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[1-9]{1}[0-9]{0,2}" });
            this._nAdicao = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_DI_Adi.prototype, "nSeqAdic", {
        get: function () {
            return this._nSeqAdic;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[1-9]{1}[0-9]{0,2}" });
            this._nSeqAdic = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_DI_Adi.prototype, "cFabricante", {
        get: function () {
            return this._cFabricante;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "60" });
            this._cFabricante = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_DI_Adi.prototype, "vDescDI", {
        get: function () {
            return this._vDescDI;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vDescDI = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_DI_Adi.prototype, "nDraw", {
        get: function () {
            return this._nDraw;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{0,11}" });
            this._nDraw = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Prod_DI_Adi;
}());
exports.TNFe_InfNFe_Det_Prod_DI_Adi = TNFe_InfNFe_Det_Prod_DI_Adi;
var TNFe_InfNFe_Det_Prod_DetExport = /** @class */ (function () {
    function TNFe_InfNFe_Det_Prod_DetExport() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Prod_DetExport.prototype, "nDraw", {
        get: function () {
            return this._nDraw;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{0,11}" });
            this._nDraw = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_DetExport.prototype, "exportInd", {
        get: function () {
            return this._exportInd;
        },
        set: function (value) {
            this._exportInd = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Prod_DetExport;
}());
exports.TNFe_InfNFe_Det_Prod_DetExport = TNFe_InfNFe_Det_Prod_DetExport;
var TNFe_InfNFe_Det_Prod_DetExport_ExportInd = /** @class */ (function () {
    function TNFe_InfNFe_Det_Prod_DetExport_ExportInd() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Prod_DetExport_ExportInd.prototype, "nRE", {
        get: function () {
            return this._nRE;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{0,12}" });
            this._nRE = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_DetExport_ExportInd.prototype, "chNFe", {
        get: function () {
            return this._chNFe;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TChNFe(value);
            this._chNFe = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_DetExport_ExportInd.prototype, "qExport", {
        get: function () {
            return this._qExport;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1104v(value);
            this._qExport = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Prod_DetExport_ExportInd;
}());
exports.TNFe_InfNFe_Det_Prod_DetExport_ExportInd = TNFe_InfNFe_Det_Prod_DetExport_ExportInd;
var TNFe_InfNFe_Det_Prod_Rastro = /** @class */ (function () {
    function TNFe_InfNFe_Det_Prod_Rastro() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Rastro.prototype, "nLote", {
        get: function () {
            return this._nLote;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "20" });
            this._nLote = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Rastro.prototype, "qLote", {
        get: function () {
            return this._qLote;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0803v(value);
            this._qLote = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Rastro.prototype, "dFab", {
        get: function () {
            return this._dFab;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TData(value);
            this._dFab = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Rastro.prototype, "dVal", {
        get: function () {
            return this._dVal;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TData(value);
            this._dVal = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Rastro.prototype, "cAgreg", {
        get: function () {
            return this._cAgreg;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{1,20}" });
            this._cAgreg = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Prod_Rastro;
}());
exports.TNFe_InfNFe_Det_Prod_Rastro = TNFe_InfNFe_Det_Prod_Rastro;
var TNFe_InfNFe_Det_Prod_VeicProd = /** @class */ (function () {
    function TNFe_InfNFe_Det_Prod_VeicProd() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Prod_VeicProd.prototype, "tpOp", {
        get: function () {
            return this._tpOp;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3"] });
            this._tpOp = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_VeicProd.prototype, "chassi", {
        get: function () {
            return this._chassi;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[A-Z0-9]+" });
            this._chassi = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_VeicProd.prototype, "cCor", {
        get: function () {
            return this._cCor;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "4" });
            this._cCor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_VeicProd.prototype, "xCor", {
        get: function () {
            return this._xCor;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "40" });
            this._xCor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_VeicProd.prototype, "pot", {
        get: function () {
            return this._pot;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "4" });
            this._pot = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_VeicProd.prototype, "cilin", {
        get: function () {
            return this._cilin;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "4" });
            this._cilin = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_VeicProd.prototype, "pesoL", {
        get: function () {
            return this._pesoL;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "9" });
            this._pesoL = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_VeicProd.prototype, "pesoB", {
        get: function () {
            return this._pesoB;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "9" });
            this._pesoB = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_VeicProd.prototype, "nSerie", {
        get: function () {
            return this._nSerie;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "9" });
            this._nSerie = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_VeicProd.prototype, "tpComb", {
        get: function () {
            return this._tpComb;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "2" });
            this._tpComb = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_VeicProd.prototype, "nMotor", {
        get: function () {
            return this._nMotor;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "21" });
            this._nMotor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_VeicProd.prototype, "CMT", {
        get: function () {
            return this._CMT;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "9" });
            this._CMT = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_VeicProd.prototype, "dist", {
        get: function () {
            return this._dist;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "4" });
            this._dist = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_VeicProd.prototype, "anoMod", {
        get: function () {
            return this._anoMod;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{4}" });
            this._anoMod = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_VeicProd.prototype, "anoFab", {
        get: function () {
            return this._anoFab;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{4}" });
            this._anoFab = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_VeicProd.prototype, "tpPint", {
        get: function () {
            return this._tpPint;
        },
        set: function (value) {
            Model_1.validate(value, {});
            this._tpPint = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_VeicProd.prototype, "tpVeic", {
        get: function () {
            return this._tpVeic;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{1,2}" });
            this._tpVeic = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_VeicProd.prototype, "espVeic", {
        get: function () {
            return this._espVeic;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{1}" });
            this._espVeic = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_VeicProd.prototype, "VIN", {
        get: function () {
            return this._VIN;
        },
        set: function (value) {
            Model_1.validate(value, { "enumeration": ["R", "N"] });
            this._VIN = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_VeicProd.prototype, "condVeic", {
        get: function () {
            return this._condVeic;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["1", "2", "3"] });
            this._condVeic = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_VeicProd.prototype, "cMod", {
        get: function () {
            return this._cMod;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{1,6}" });
            this._cMod = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_VeicProd.prototype, "cCorDENATRAN", {
        get: function () {
            return this._cCorDENATRAN;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "minLength": "1", "maxLength": "2", "pattern": "[0-9]{1,2}" });
            this._cCorDENATRAN = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_VeicProd.prototype, "lota", {
        get: function () {
            return this._lota;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "3", "whiteSpace": "preserve", "pattern": "[0-9]{1,3}" });
            this._lota = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_VeicProd.prototype, "tpRest", {
        get: function () {
            return this._tpRest;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "9"] });
            this._tpRest = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Prod_VeicProd;
}());
exports.TNFe_InfNFe_Det_Prod_VeicProd = TNFe_InfNFe_Det_Prod_VeicProd;
var TNFe_InfNFe_Det_Prod_Med = /** @class */ (function () {
    function TNFe_InfNFe_Det_Prod_Med() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Med.prototype, "cProdANVISA", {
        get: function () {
            return this._cProdANVISA;
        },
        set: function (value) {
            Model_1.validate(value, {});
            this._cProdANVISA = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Med.prototype, "vPMC", {
        get: function () {
            return this._vPMC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vPMC = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Prod_Med;
}());
exports.TNFe_InfNFe_Det_Prod_Med = TNFe_InfNFe_Det_Prod_Med;
var TNFe_InfNFe_Det_Prod_Arma = /** @class */ (function () {
    function TNFe_InfNFe_Det_Prod_Arma() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Arma.prototype, "tpArma", {
        get: function () {
            return this._tpArma;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1"] });
            this._tpArma = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Arma.prototype, "nSerie", {
        get: function () {
            return this._nSerie;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "15" });
            this._nSerie = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Arma.prototype, "nCano", {
        get: function () {
            return this._nCano;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "15" });
            this._nCano = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Arma.prototype, "descr", {
        get: function () {
            return this._descr;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "256" });
            this._descr = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Prod_Arma;
}());
exports.TNFe_InfNFe_Det_Prod_Arma = TNFe_InfNFe_Det_Prod_Arma;
var TNFe_InfNFe_Det_Prod_Comb = /** @class */ (function () {
    function TNFe_InfNFe_Det_Prod_Comb() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Comb.prototype, "cProdANP", {
        get: function () {
            return this._cProdANP;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{9}" });
            this._cProdANP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Comb.prototype, "descANP", {
        get: function () {
            return this._descANP;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "2", "maxLength": "95" });
            this._descANP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Comb.prototype, "pGLP", {
        get: function () {
            return this._pGLP;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Max100(value);
            this._pGLP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Comb.prototype, "pGNn", {
        get: function () {
            return this._pGNn;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Max100(value);
            this._pGNn = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Comb.prototype, "pGNi", {
        get: function () {
            return this._pGNi;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Max100(value);
            this._pGNi = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Comb.prototype, "vPart", {
        get: function () {
            return this._vPart;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vPart = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Comb.prototype, "CODIF", {
        get: function () {
            return this._CODIF;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{1,21}" });
            this._CODIF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Comb.prototype, "qTemp", {
        get: function () {
            return this._qTemp;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1204temperatura(value);
            this._qTemp = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Comb.prototype, "UFCons", {
        get: function () {
            return this._UFCons;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TUf(value);
            this._UFCons = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Comb.prototype, "CIDE", {
        get: function () {
            return this._CIDE;
        },
        set: function (value) {
            this._CIDE = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Comb.prototype, "encerrante", {
        get: function () {
            return this._encerrante;
        },
        set: function (value) {
            this._encerrante = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Prod_Comb;
}());
exports.TNFe_InfNFe_Det_Prod_Comb = TNFe_InfNFe_Det_Prod_Comb;
var TNFe_InfNFe_Det_Prod_Comb_CIDE = /** @class */ (function () {
    function TNFe_InfNFe_Det_Prod_Comb_CIDE() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Comb_CIDE.prototype, "qBCProd", {
        get: function () {
            return this._qBCProd;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1204v(value);
            this._qBCProd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Comb_CIDE.prototype, "vAliqProd", {
        get: function () {
            return this._vAliqProd;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1104(value);
            this._vAliqProd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Comb_CIDE.prototype, "vCIDE", {
        get: function () {
            return this._vCIDE;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vCIDE = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Prod_Comb_CIDE;
}());
exports.TNFe_InfNFe_Det_Prod_Comb_CIDE = TNFe_InfNFe_Det_Prod_Comb_CIDE;
var TNFe_InfNFe_Det_Prod_Comb_Encerrante = /** @class */ (function () {
    function TNFe_InfNFe_Det_Prod_Comb_Encerrante() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Comb_Encerrante.prototype, "nBico", {
        get: function () {
            return this._nBico;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{1,3}" });
            this._nBico = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Comb_Encerrante.prototype, "nBomba", {
        get: function () {
            return this._nBomba;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{1,3}" });
            this._nBomba = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Comb_Encerrante.prototype, "nTanque", {
        get: function () {
            return this._nTanque;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{1,3}" });
            this._nTanque = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Comb_Encerrante.prototype, "vEncIni", {
        get: function () {
            return this._vEncIni;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1203(value);
            this._vEncIni = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Prod_Comb_Encerrante.prototype, "vEncFin", {
        get: function () {
            return this._vEncFin;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1203(value);
            this._vEncFin = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Prod_Comb_Encerrante;
}());
exports.TNFe_InfNFe_Det_Prod_Comb_Encerrante = TNFe_InfNFe_Det_Prod_Comb_Encerrante;
var TNFe_InfNFe_Det_Imposto = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto.prototype, "vTotTrib", {
        get: function () {
            return this._vTotTrib;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vTotTrib = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto.prototype, "ICMS", {
        get: function () {
            return this._ICMS;
        },
        set: function (value) {
            this._ICMS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto.prototype, "IPI", {
        get: function () {
            return this._IPI;
        },
        set: function (value) {
            undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto.prototype, "II", {
        get: function () {
            return this._II;
        },
        set: function (value) {
            this._II = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto.prototype, "ISSQN", {
        get: function () {
            return this._ISSQN;
        },
        set: function (value) {
            this._ISSQN = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto.prototype, "PIS", {
        get: function () {
            return this._PIS;
        },
        set: function (value) {
            this._PIS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto.prototype, "PISST", {
        get: function () {
            return this._PISST;
        },
        set: function (value) {
            this._PISST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto.prototype, "COFINS", {
        get: function () {
            return this._COFINS;
        },
        set: function (value) {
            this._COFINS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto.prototype, "COFINSST", {
        get: function () {
            return this._COFINSST;
        },
        set: function (value) {
            this._COFINSST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto.prototype, "ICMSUFDest", {
        get: function () {
            return this._ICMSUFDest;
        },
        set: function (value) {
            this._ICMSUFDest = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto;
}());
exports.TNFe_InfNFe_Det_Imposto = TNFe_InfNFe_Det_Imposto;
var TNFe_InfNFe_Det_Imposto_ICMS = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_ICMS() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS.prototype, "ICMS00", {
        get: function () {
            return this._ICMS00;
        },
        set: function (value) {
            this._ICMS00 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS.prototype, "ICMS10", {
        get: function () {
            return this._ICMS10;
        },
        set: function (value) {
            this._ICMS10 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS.prototype, "ICMS20", {
        get: function () {
            return this._ICMS20;
        },
        set: function (value) {
            this._ICMS20 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS.prototype, "ICMS30", {
        get: function () {
            return this._ICMS30;
        },
        set: function (value) {
            this._ICMS30 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS.prototype, "ICMS40", {
        get: function () {
            return this._ICMS40;
        },
        set: function (value) {
            this._ICMS40 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS.prototype, "ICMS51", {
        get: function () {
            return this._ICMS51;
        },
        set: function (value) {
            this._ICMS51 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS.prototype, "ICMS60", {
        get: function () {
            return this._ICMS60;
        },
        set: function (value) {
            this._ICMS60 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS.prototype, "ICMS70", {
        get: function () {
            return this._ICMS70;
        },
        set: function (value) {
            this._ICMS70 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS.prototype, "ICMS90", {
        get: function () {
            return this._ICMS90;
        },
        set: function (value) {
            this._ICMS90 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS.prototype, "ICMSPart", {
        get: function () {
            return this._ICMSPart;
        },
        set: function (value) {
            this._ICMSPart = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS.prototype, "ICMSST", {
        get: function () {
            return this._ICMSST;
        },
        set: function (value) {
            this._ICMSST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS.prototype, "ICMSSN101", {
        get: function () {
            return this._ICMSSN101;
        },
        set: function (value) {
            this._ICMSSN101 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS.prototype, "ICMSSN102", {
        get: function () {
            return this._ICMSSN102;
        },
        set: function (value) {
            this._ICMSSN102 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS.prototype, "ICMSSN201", {
        get: function () {
            return this._ICMSSN201;
        },
        set: function (value) {
            this._ICMSSN201 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS.prototype, "ICMSSN202", {
        get: function () {
            return this._ICMSSN202;
        },
        set: function (value) {
            this._ICMSSN202 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS.prototype, "ICMSSN500", {
        get: function () {
            return this._ICMSSN500;
        },
        set: function (value) {
            this._ICMSSN500 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS.prototype, "ICMSSN900", {
        get: function () {
            return this._ICMSSN900;
        },
        set: function (value) {
            this._ICMSSN900 = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_ICMS;
}());
exports.TNFe_InfNFe_Det_Imposto_ICMS = TNFe_InfNFe_Det_Imposto_ICMS;
var TNFe_InfNFe_Det_Imposto_ICMS_ICMS00 = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_ICMS_ICMS00() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS00.prototype, "orig", {
        get: function () {
            return this._orig;
        },
        set: function (value) {
            exports.Torig(value);
            this._orig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS00.prototype, "CST", {
        get: function () {
            return this._CST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["00"] });
            this._CST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS00.prototype, "modBC", {
        get: function () {
            return this._modBC;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3"] });
            this._modBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS00.prototype, "vBC", {
        get: function () {
            return this._vBC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS00.prototype, "pICMS", {
        get: function () {
            return this._pICMS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pICMS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS00.prototype, "vICMS", {
        get: function () {
            return this._vICMS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS00.prototype, "pFCP", {
        get: function () {
            return this._pFCP;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pFCP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS00.prototype, "vFCP", {
        get: function () {
            return this._vFCP;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vFCP = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_ICMS_ICMS00;
}());
exports.TNFe_InfNFe_Det_Imposto_ICMS_ICMS00 = TNFe_InfNFe_Det_Imposto_ICMS_ICMS00;
var TNFe_InfNFe_Det_Imposto_ICMS_ICMS10 = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_ICMS_ICMS10() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS10.prototype, "orig", {
        get: function () {
            return this._orig;
        },
        set: function (value) {
            exports.Torig(value);
            this._orig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS10.prototype, "CST", {
        get: function () {
            return this._CST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["10"] });
            this._CST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS10.prototype, "modBC", {
        get: function () {
            return this._modBC;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3"] });
            this._modBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS10.prototype, "vBC", {
        get: function () {
            return this._vBC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS10.prototype, "pICMS", {
        get: function () {
            return this._pICMS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pICMS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS10.prototype, "vICMS", {
        get: function () {
            return this._vICMS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS10.prototype, "vBCFCP", {
        get: function () {
            return this._vBCFCP;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCFCP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS10.prototype, "pFCP", {
        get: function () {
            return this._pFCP;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pFCP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS10.prototype, "vFCP", {
        get: function () {
            return this._vFCP;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vFCP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS10.prototype, "modBCST", {
        get: function () {
            return this._modBCST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "5"] });
            this._modBCST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS10.prototype, "pMVAST", {
        get: function () {
            return this._pMVAST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pMVAST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS10.prototype, "pRedBCST", {
        get: function () {
            return this._pRedBCST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pRedBCST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS10.prototype, "vBCST", {
        get: function () {
            return this._vBCST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS10.prototype, "pICMSST", {
        get: function () {
            return this._pICMSST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pICMSST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS10.prototype, "vICMSST", {
        get: function () {
            return this._vICMSST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMSST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS10.prototype, "vBCFCPST", {
        get: function () {
            return this._vBCFCPST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCFCPST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS10.prototype, "pFCPST", {
        get: function () {
            return this._pFCPST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pFCPST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS10.prototype, "vFCPST", {
        get: function () {
            return this._vFCPST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vFCPST = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_ICMS_ICMS10;
}());
exports.TNFe_InfNFe_Det_Imposto_ICMS_ICMS10 = TNFe_InfNFe_Det_Imposto_ICMS_ICMS10;
var TNFe_InfNFe_Det_Imposto_ICMS_ICMS20 = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_ICMS_ICMS20() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS20.prototype, "orig", {
        get: function () {
            return this._orig;
        },
        set: function (value) {
            exports.Torig(value);
            this._orig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS20.prototype, "CST", {
        get: function () {
            return this._CST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["20"] });
            this._CST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS20.prototype, "modBC", {
        get: function () {
            return this._modBC;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3"] });
            this._modBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS20.prototype, "pRedBC", {
        get: function () {
            return this._pRedBC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pRedBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS20.prototype, "vBC", {
        get: function () {
            return this._vBC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS20.prototype, "pICMS", {
        get: function () {
            return this._pICMS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pICMS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS20.prototype, "vICMS", {
        get: function () {
            return this._vICMS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS20.prototype, "vBCFCP", {
        get: function () {
            return this._vBCFCP;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCFCP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS20.prototype, "pFCP", {
        get: function () {
            return this._pFCP;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pFCP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS20.prototype, "vFCP", {
        get: function () {
            return this._vFCP;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vFCP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS20.prototype, "vICMSDeson", {
        get: function () {
            return this._vICMSDeson;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMSDeson = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS20.prototype, "motDesICMS", {
        get: function () {
            return this._motDesICMS;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["3", "9", "12"] });
            this._motDesICMS = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_ICMS_ICMS20;
}());
exports.TNFe_InfNFe_Det_Imposto_ICMS_ICMS20 = TNFe_InfNFe_Det_Imposto_ICMS_ICMS20;
var TNFe_InfNFe_Det_Imposto_ICMS_ICMS30 = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_ICMS_ICMS30() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS30.prototype, "orig", {
        get: function () {
            return this._orig;
        },
        set: function (value) {
            exports.Torig(value);
            this._orig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS30.prototype, "CST", {
        get: function () {
            return this._CST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["30"] });
            this._CST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS30.prototype, "modBCST", {
        get: function () {
            return this._modBCST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "5"] });
            this._modBCST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS30.prototype, "pMVAST", {
        get: function () {
            return this._pMVAST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pMVAST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS30.prototype, "pRedBCST", {
        get: function () {
            return this._pRedBCST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pRedBCST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS30.prototype, "vBCST", {
        get: function () {
            return this._vBCST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS30.prototype, "pICMSST", {
        get: function () {
            return this._pICMSST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pICMSST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS30.prototype, "vICMSST", {
        get: function () {
            return this._vICMSST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMSST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS30.prototype, "vBCFCPST", {
        get: function () {
            return this._vBCFCPST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCFCPST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS30.prototype, "pFCPST", {
        get: function () {
            return this._pFCPST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pFCPST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS30.prototype, "vFCPST", {
        get: function () {
            return this._vFCPST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vFCPST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS30.prototype, "vICMSDeson", {
        get: function () {
            return this._vICMSDeson;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMSDeson = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS30.prototype, "motDesICMS", {
        get: function () {
            return this._motDesICMS;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["6", "7", "9"] });
            this._motDesICMS = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_ICMS_ICMS30;
}());
exports.TNFe_InfNFe_Det_Imposto_ICMS_ICMS30 = TNFe_InfNFe_Det_Imposto_ICMS_ICMS30;
var TNFe_InfNFe_Det_Imposto_ICMS_ICMS40 = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_ICMS_ICMS40() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS40.prototype, "orig", {
        get: function () {
            return this._orig;
        },
        set: function (value) {
            exports.Torig(value);
            this._orig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS40.prototype, "CST", {
        get: function () {
            return this._CST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["40", "41", "50"] });
            this._CST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS40.prototype, "vICMSDeson", {
        get: function () {
            return this._vICMSDeson;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMSDeson = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS40.prototype, "motDesICMS", {
        get: function () {
            return this._motDesICMS;
        },
        set: function (value) {
            Model_1.validate(value, {
                "whiteSpace": "preserve",
                "enumeration": ["1", "3", "4", "5", "6", "7", "8", "9", "10", "11", "16", "90"]
            });
            this._motDesICMS = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_ICMS_ICMS40;
}());
exports.TNFe_InfNFe_Det_Imposto_ICMS_ICMS40 = TNFe_InfNFe_Det_Imposto_ICMS_ICMS40;
var TNFe_InfNFe_Det_Imposto_ICMS_ICMS51 = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_ICMS_ICMS51() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS51.prototype, "orig", {
        get: function () {
            return this._orig;
        },
        set: function (value) {
            exports.Torig(value);
            this._orig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS51.prototype, "CST", {
        get: function () {
            return this._CST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["51"] });
            this._CST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS51.prototype, "modBC", {
        get: function () {
            return this._modBC;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3"] });
            this._modBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS51.prototype, "pRedBC", {
        get: function () {
            return this._pRedBC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pRedBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS51.prototype, "vBC", {
        get: function () {
            return this._vBC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS51.prototype, "pICMS", {
        get: function () {
            return this._pICMS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pICMS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS51.prototype, "vICMSOp", {
        get: function () {
            return this._vICMSOp;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMSOp = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS51.prototype, "pDif", {
        get: function () {
            return this._pDif;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Max100(value);
            this._pDif = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS51.prototype, "vICMSDif", {
        get: function () {
            return this._vICMSDif;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMSDif = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS51.prototype, "vICMS", {
        get: function () {
            return this._vICMS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS51.prototype, "vBCFCP", {
        get: function () {
            return this._vBCFCP;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCFCP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS51.prototype, "pFCP", {
        get: function () {
            return this._pFCP;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pFCP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS51.prototype, "vFCP", {
        get: function () {
            return this._vFCP;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vFCP = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_ICMS_ICMS51;
}());
exports.TNFe_InfNFe_Det_Imposto_ICMS_ICMS51 = TNFe_InfNFe_Det_Imposto_ICMS_ICMS51;
var TNFe_InfNFe_Det_Imposto_ICMS_ICMS60 = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_ICMS_ICMS60() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS60.prototype, "orig", {
        get: function () {
            return this._orig;
        },
        set: function (value) {
            exports.Torig(value);
            this._orig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS60.prototype, "CST", {
        get: function () {
            return this._CST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["60"] });
            this._CST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS60.prototype, "vBCSTRet", {
        get: function () {
            return this._vBCSTRet;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCSTRet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS60.prototype, "pST", {
        get: function () {
            return this._pST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS60.prototype, "vICMSSTRet", {
        get: function () {
            return this._vICMSSTRet;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMSSTRet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS60.prototype, "vBCFCPSTRet", {
        get: function () {
            return this._vBCFCPSTRet;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCFCPSTRet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS60.prototype, "pFCPSTRet", {
        get: function () {
            return this._pFCPSTRet;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pFCPSTRet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS60.prototype, "vFCPSTRet", {
        get: function () {
            return this._vFCPSTRet;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vFCPSTRet = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_ICMS_ICMS60;
}());
exports.TNFe_InfNFe_Det_Imposto_ICMS_ICMS60 = TNFe_InfNFe_Det_Imposto_ICMS_ICMS60;
var TNFe_InfNFe_Det_Imposto_ICMS_ICMS70 = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_ICMS_ICMS70() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS70.prototype, "orig", {
        get: function () {
            return this._orig;
        },
        set: function (value) {
            exports.Torig(value);
            this._orig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS70.prototype, "CST", {
        get: function () {
            return this._CST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["70"] });
            this._CST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS70.prototype, "modBC", {
        get: function () {
            return this._modBC;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3"] });
            this._modBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS70.prototype, "pRedBC", {
        get: function () {
            return this._pRedBC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pRedBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS70.prototype, "vBC", {
        get: function () {
            return this._vBC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS70.prototype, "pICMS", {
        get: function () {
            return this._pICMS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pICMS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS70.prototype, "vICMS", {
        get: function () {
            return this._vICMS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS70.prototype, "vBCFCP", {
        get: function () {
            return this._vBCFCP;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCFCP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS70.prototype, "pFCP", {
        get: function () {
            return this._pFCP;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pFCP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS70.prototype, "vFCP", {
        get: function () {
            return this._vFCP;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vFCP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS70.prototype, "modBCST", {
        get: function () {
            return this._modBCST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "5"] });
            this._modBCST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS70.prototype, "pMVAST", {
        get: function () {
            return this._pMVAST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pMVAST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS70.prototype, "pRedBCST", {
        get: function () {
            return this._pRedBCST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pRedBCST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS70.prototype, "vBCST", {
        get: function () {
            return this._vBCST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS70.prototype, "pICMSST", {
        get: function () {
            return this._pICMSST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pICMSST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS70.prototype, "vICMSST", {
        get: function () {
            return this._vICMSST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMSST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS70.prototype, "vBCFCPST", {
        get: function () {
            return this._vBCFCPST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCFCPST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS70.prototype, "pFCPST", {
        get: function () {
            return this._pFCPST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pFCPST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS70.prototype, "vFCPST", {
        get: function () {
            return this._vFCPST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vFCPST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS70.prototype, "vICMSDeson", {
        get: function () {
            return this._vICMSDeson;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMSDeson = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS70.prototype, "motDesICMS", {
        get: function () {
            return this._motDesICMS;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["3", "9", "12"] });
            this._motDesICMS = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_ICMS_ICMS70;
}());
exports.TNFe_InfNFe_Det_Imposto_ICMS_ICMS70 = TNFe_InfNFe_Det_Imposto_ICMS_ICMS70;
var TNFe_InfNFe_Det_Imposto_ICMS_ICMS90 = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_ICMS_ICMS90() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS90.prototype, "orig", {
        get: function () {
            return this._orig;
        },
        set: function (value) {
            exports.Torig(value);
            this._orig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS90.prototype, "CST", {
        get: function () {
            return this._CST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["90"] });
            this._CST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS90.prototype, "modBC", {
        get: function () {
            return this._modBC;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3"] });
            this._modBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS90.prototype, "vBC", {
        get: function () {
            return this._vBC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS90.prototype, "pRedBC", {
        get: function () {
            return this._pRedBC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pRedBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS90.prototype, "pICMS", {
        get: function () {
            return this._pICMS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pICMS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS90.prototype, "vICMS", {
        get: function () {
            return this._vICMS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS90.prototype, "vBCFCP", {
        get: function () {
            return this._vBCFCP;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCFCP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS90.prototype, "pFCP", {
        get: function () {
            return this._pFCP;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pFCP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS90.prototype, "vFCP", {
        get: function () {
            return this._vFCP;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vFCP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS90.prototype, "modBCST", {
        get: function () {
            return this._modBCST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "5"] });
            this._modBCST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS90.prototype, "pMVAST", {
        get: function () {
            return this._pMVAST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pMVAST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS90.prototype, "pRedBCST", {
        get: function () {
            return this._pRedBCST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pRedBCST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS90.prototype, "vBCST", {
        get: function () {
            return this._vBCST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS90.prototype, "pICMSST", {
        get: function () {
            return this._pICMSST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pICMSST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS90.prototype, "vICMSST", {
        get: function () {
            return this._vICMSST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMSST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS90.prototype, "vBCFCPST", {
        get: function () {
            return this._vBCFCPST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCFCPST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS90.prototype, "pFCPST", {
        get: function () {
            return this._pFCPST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pFCPST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS90.prototype, "vFCPST", {
        get: function () {
            return this._vFCPST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vFCPST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS90.prototype, "vICMSDeson", {
        get: function () {
            return this._vICMSDeson;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMSDeson = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMS90.prototype, "motDesICMS", {
        get: function () {
            return this._motDesICMS;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["3", "9", "12"] });
            this._motDesICMS = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_ICMS_ICMS90;
}());
exports.TNFe_InfNFe_Det_Imposto_ICMS_ICMS90 = TNFe_InfNFe_Det_Imposto_ICMS_ICMS90;
var TNFe_InfNFe_Det_Imposto_ICMS_ICMSPart = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_ICMS_ICMSPart() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSPart.prototype, "orig", {
        get: function () {
            return this._orig;
        },
        set: function (value) {
            exports.Torig(value);
            this._orig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSPart.prototype, "CST", {
        get: function () {
            return this._CST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["10", "90"] });
            this._CST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSPart.prototype, "modBC", {
        get: function () {
            return this._modBC;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3"] });
            this._modBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSPart.prototype, "vBC", {
        get: function () {
            return this._vBC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSPart.prototype, "pRedBC", {
        get: function () {
            return this._pRedBC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pRedBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSPart.prototype, "pICMS", {
        get: function () {
            return this._pICMS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pICMS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSPart.prototype, "vICMS", {
        get: function () {
            return this._vICMS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSPart.prototype, "modBCST", {
        get: function () {
            return this._modBCST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "5"] });
            this._modBCST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSPart.prototype, "pMVAST", {
        get: function () {
            return this._pMVAST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pMVAST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSPart.prototype, "pRedBCST", {
        get: function () {
            return this._pRedBCST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pRedBCST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSPart.prototype, "vBCST", {
        get: function () {
            return this._vBCST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSPart.prototype, "pICMSST", {
        get: function () {
            return this._pICMSST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pICMSST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSPart.prototype, "vICMSST", {
        get: function () {
            return this._vICMSST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMSST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSPart.prototype, "pBCOp", {
        get: function () {
            return this._pBCOp;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pBCOp = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSPart.prototype, "UFST", {
        get: function () {
            return this._UFST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TUf(value);
            this._UFST = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_ICMS_ICMSPart;
}());
exports.TNFe_InfNFe_Det_Imposto_ICMS_ICMSPart = TNFe_InfNFe_Det_Imposto_ICMS_ICMSPart;
var TNFe_InfNFe_Det_Imposto_ICMS_ICMSST = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_ICMS_ICMSST() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSST.prototype, "orig", {
        get: function () {
            return this._orig;
        },
        set: function (value) {
            exports.Torig(value);
            this._orig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSST.prototype, "CST", {
        get: function () {
            return this._CST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["41", "60"] });
            this._CST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSST.prototype, "vBCSTRet", {
        get: function () {
            return this._vBCSTRet;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCSTRet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSST.prototype, "vICMSSTRet", {
        get: function () {
            return this._vICMSSTRet;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMSSTRet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSST.prototype, "vBCSTDest", {
        get: function () {
            return this._vBCSTDest;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCSTDest = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSST.prototype, "vICMSSTDest", {
        get: function () {
            return this._vICMSSTDest;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMSSTDest = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_ICMS_ICMSST;
}());
exports.TNFe_InfNFe_Det_Imposto_ICMS_ICMSST = TNFe_InfNFe_Det_Imposto_ICMS_ICMSST;
var TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN101 = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN101() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN101.prototype, "orig", {
        get: function () {
            return this._orig;
        },
        set: function (value) {
            exports.Torig(value);
            this._orig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN101.prototype, "CSOSN", {
        get: function () {
            return this._CSOSN;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["101"] });
            this._CSOSN = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN101.prototype, "pCredSN", {
        get: function () {
            return this._pCredSN;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pCredSN = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN101.prototype, "vCredICMSSN", {
        get: function () {
            return this._vCredICMSSN;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vCredICMSSN = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN101;
}());
exports.TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN101 = TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN101;
var TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN102 = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN102() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN102.prototype, "orig", {
        get: function () {
            return this._orig;
        },
        set: function (value) {
            exports.Torig(value);
            this._orig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN102.prototype, "CSOSN", {
        get: function () {
            return this._CSOSN;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["102", "103", "300", "400"] });
            this._CSOSN = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN102;
}());
exports.TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN102 = TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN102;
var TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN201 = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN201() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN201.prototype, "orig", {
        get: function () {
            return this._orig;
        },
        set: function (value) {
            exports.Torig(value);
            this._orig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN201.prototype, "CSOSN", {
        get: function () {
            return this._CSOSN;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["201"] });
            this._CSOSN = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN201.prototype, "modBCST", {
        get: function () {
            return this._modBCST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "5"] });
            this._modBCST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN201.prototype, "pMVAST", {
        get: function () {
            return this._pMVAST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pMVAST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN201.prototype, "pRedBCST", {
        get: function () {
            return this._pRedBCST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pRedBCST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN201.prototype, "vBCST", {
        get: function () {
            return this._vBCST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN201.prototype, "pICMSST", {
        get: function () {
            return this._pICMSST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pICMSST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN201.prototype, "vICMSST", {
        get: function () {
            return this._vICMSST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMSST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN201.prototype, "vBCFCPST", {
        get: function () {
            return this._vBCFCPST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCFCPST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN201.prototype, "pFCPST", {
        get: function () {
            return this._pFCPST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pFCPST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN201.prototype, "vFCPST", {
        get: function () {
            return this._vFCPST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vFCPST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN201.prototype, "pCredSN", {
        get: function () {
            return this._pCredSN;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pCredSN = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN201.prototype, "vCredICMSSN", {
        get: function () {
            return this._vCredICMSSN;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vCredICMSSN = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN201;
}());
exports.TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN201 = TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN201;
var TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN202 = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN202() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN202.prototype, "orig", {
        get: function () {
            return this._orig;
        },
        set: function (value) {
            exports.Torig(value);
            this._orig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN202.prototype, "CSOSN", {
        get: function () {
            return this._CSOSN;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["202", "203"] });
            this._CSOSN = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN202.prototype, "modBCST", {
        get: function () {
            return this._modBCST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "5"] });
            this._modBCST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN202.prototype, "pMVAST", {
        get: function () {
            return this._pMVAST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pMVAST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN202.prototype, "pRedBCST", {
        get: function () {
            return this._pRedBCST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pRedBCST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN202.prototype, "vBCST", {
        get: function () {
            return this._vBCST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN202.prototype, "pICMSST", {
        get: function () {
            return this._pICMSST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pICMSST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN202.prototype, "vICMSST", {
        get: function () {
            return this._vICMSST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMSST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN202.prototype, "vBCFCPST", {
        get: function () {
            return this._vBCFCPST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCFCPST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN202.prototype, "pFCPST", {
        get: function () {
            return this._pFCPST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pFCPST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN202.prototype, "vFCPST", {
        get: function () {
            return this._vFCPST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vFCPST = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN202;
}());
exports.TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN202 = TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN202;
var TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN500 = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN500() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN500.prototype, "orig", {
        get: function () {
            return this._orig;
        },
        set: function (value) {
            exports.Torig(value);
            this._orig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN500.prototype, "CSOSN", {
        get: function () {
            return this._CSOSN;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["500"] });
            this._CSOSN = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN500.prototype, "vBCSTRet", {
        get: function () {
            return this._vBCSTRet;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCSTRet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN500.prototype, "pST", {
        get: function () {
            return this._pST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN500.prototype, "vICMSSTRet", {
        get: function () {
            return this._vICMSSTRet;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMSSTRet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN500.prototype, "vBCFCPSTRet", {
        get: function () {
            return this._vBCFCPSTRet;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCFCPSTRet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN500.prototype, "pFCPSTRet", {
        get: function () {
            return this._pFCPSTRet;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pFCPSTRet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN500.prototype, "vFCPSTRet", {
        get: function () {
            return this._vFCPSTRet;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vFCPSTRet = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN500;
}());
exports.TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN500 = TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN500;
var TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN900 = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN900() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN900.prototype, "orig", {
        get: function () {
            return this._orig;
        },
        set: function (value) {
            exports.Torig(value);
            this._orig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN900.prototype, "CSOSN", {
        get: function () {
            return this._CSOSN;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["900"] });
            this._CSOSN = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN900.prototype, "modBC", {
        get: function () {
            return this._modBC;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3"] });
            this._modBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN900.prototype, "vBC", {
        get: function () {
            return this._vBC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN900.prototype, "pRedBC", {
        get: function () {
            return this._pRedBC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pRedBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN900.prototype, "pICMS", {
        get: function () {
            return this._pICMS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pICMS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN900.prototype, "vICMS", {
        get: function () {
            return this._vICMS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN900.prototype, "modBCST", {
        get: function () {
            return this._modBCST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "5"] });
            this._modBCST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN900.prototype, "pMVAST", {
        get: function () {
            return this._pMVAST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pMVAST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN900.prototype, "pRedBCST", {
        get: function () {
            return this._pRedBCST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pRedBCST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN900.prototype, "vBCST", {
        get: function () {
            return this._vBCST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN900.prototype, "pICMSST", {
        get: function () {
            return this._pICMSST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pICMSST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN900.prototype, "vICMSST", {
        get: function () {
            return this._vICMSST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMSST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN900.prototype, "vBCFCPST", {
        get: function () {
            return this._vBCFCPST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCFCPST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN900.prototype, "pFCPST", {
        get: function () {
            return this._pFCPST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04Opc(value);
            this._pFCPST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN900.prototype, "vFCPST", {
        get: function () {
            return this._vFCPST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vFCPST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN900.prototype, "pCredSN", {
        get: function () {
            return this._pCredSN;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pCredSN = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN900.prototype, "vCredICMSSN", {
        get: function () {
            return this._vCredICMSSN;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vCredICMSSN = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN900;
}());
exports.TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN900 = TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN900;
var TNFe_InfNFe_Det_Imposto_II = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_II() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_II.prototype, "vBC", {
        get: function () {
            return this._vBC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_II.prototype, "vDespAdu", {
        get: function () {
            return this._vDespAdu;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vDespAdu = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_II.prototype, "vII", {
        get: function () {
            return this._vII;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vII = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_II.prototype, "vIOF", {
        get: function () {
            return this._vIOF;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vIOF = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_II;
}());
exports.TNFe_InfNFe_Det_Imposto_II = TNFe_InfNFe_Det_Imposto_II;
var TNFe_InfNFe_Det_Imposto_ISSQN = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_ISSQN() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ISSQN.prototype, "vBC", {
        get: function () {
            return this._vBC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ISSQN.prototype, "vAliq", {
        get: function () {
            return this._vAliq;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._vAliq = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ISSQN.prototype, "vISSQN", {
        get: function () {
            return this._vISSQN;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vISSQN = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ISSQN.prototype, "cMunFG", {
        get: function () {
            return this._cMunFG;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCodMunIBGE(value);
            this._cMunFG = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ISSQN.prototype, "cListServ", {
        get: function () {
            return this._cListServ;
        },
        set: function (value) {
            exports.TCListServ(value);
            this._cListServ = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ISSQN.prototype, "vDeducao", {
        get: function () {
            return this._vDeducao;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vDeducao = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ISSQN.prototype, "vOutro", {
        get: function () {
            return this._vOutro;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vOutro = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ISSQN.prototype, "vDescIncond", {
        get: function () {
            return this._vDescIncond;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vDescIncond = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ISSQN.prototype, "vDescCond", {
        get: function () {
            return this._vDescCond;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vDescCond = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ISSQN.prototype, "vISSRet", {
        get: function () {
            return this._vISSRet;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vISSRet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ISSQN.prototype, "indISS", {
        get: function () {
            return this._indISS;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["1", "2", "3", "4", "5", "6", "7"] });
            this._indISS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ISSQN.prototype, "cServico", {
        get: function () {
            return this._cServico;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "minLength": "1", "maxLength": "20" });
            this._cServico = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ISSQN.prototype, "cMun", {
        get: function () {
            return this._cMun;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCodMunIBGE(value);
            this._cMun = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ISSQN.prototype, "cPais", {
        get: function () {
            return this._cPais;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{1,4}" });
            this._cPais = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ISSQN.prototype, "nProcesso", {
        get: function () {
            return this._nProcesso;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "minLength": "1", "maxLength": "30" });
            this._nProcesso = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ISSQN.prototype, "indIncentivo", {
        get: function () {
            return this._indIncentivo;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["1", "2"] });
            this._indIncentivo = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_ISSQN;
}());
exports.TNFe_InfNFe_Det_Imposto_ISSQN = TNFe_InfNFe_Det_Imposto_ISSQN;
var TNFe_InfNFe_Det_Imposto_PIS = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_PIS() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_PIS.prototype, "PISAliq", {
        get: function () {
            return this._PISAliq;
        },
        set: function (value) {
            this._PISAliq = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_PIS.prototype, "PISQtde", {
        get: function () {
            return this._PISQtde;
        },
        set: function (value) {
            this._PISQtde = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_PIS.prototype, "PISNT", {
        get: function () {
            return this._PISNT;
        },
        set: function (value) {
            this._PISNT = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_PIS.prototype, "PISOutr", {
        get: function () {
            return this._PISOutr;
        },
        set: function (value) {
            this._PISOutr = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_PIS;
}());
exports.TNFe_InfNFe_Det_Imposto_PIS = TNFe_InfNFe_Det_Imposto_PIS;
var TNFe_InfNFe_Det_Imposto_PIS_PISAliq = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_PIS_PISAliq() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_PIS_PISAliq.prototype, "CST", {
        get: function () {
            return this._CST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["01", "02"] });
            this._CST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_PIS_PISAliq.prototype, "vBC", {
        get: function () {
            return this._vBC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_PIS_PISAliq.prototype, "pPIS", {
        get: function () {
            return this._pPIS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pPIS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_PIS_PISAliq.prototype, "vPIS", {
        get: function () {
            return this._vPIS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vPIS = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_PIS_PISAliq;
}());
exports.TNFe_InfNFe_Det_Imposto_PIS_PISAliq = TNFe_InfNFe_Det_Imposto_PIS_PISAliq;
var TNFe_InfNFe_Det_Imposto_PIS_PISQtde = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_PIS_PISQtde() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_PIS_PISQtde.prototype, "CST", {
        get: function () {
            return this._CST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["03"] });
            this._CST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_PIS_PISQtde.prototype, "qBCProd", {
        get: function () {
            return this._qBCProd;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1204v(value);
            this._qBCProd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_PIS_PISQtde.prototype, "vAliqProd", {
        get: function () {
            return this._vAliqProd;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1104v(value);
            this._vAliqProd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_PIS_PISQtde.prototype, "vPIS", {
        get: function () {
            return this._vPIS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vPIS = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_PIS_PISQtde;
}());
exports.TNFe_InfNFe_Det_Imposto_PIS_PISQtde = TNFe_InfNFe_Det_Imposto_PIS_PISQtde;
var TNFe_InfNFe_Det_Imposto_PIS_PISNT = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_PIS_PISNT() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_PIS_PISNT.prototype, "CST", {
        get: function () {
            return this._CST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["04", "05", "06", "07", "08", "09"] });
            this._CST = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_PIS_PISNT;
}());
exports.TNFe_InfNFe_Det_Imposto_PIS_PISNT = TNFe_InfNFe_Det_Imposto_PIS_PISNT;
var TNFe_InfNFe_Det_Imposto_PIS_PISOutr = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_PIS_PISOutr() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_PIS_PISOutr.prototype, "CST", {
        get: function () {
            return this._CST;
        },
        set: function (value) {
            Model_1.validate(value, {
                "whiteSpace": "preserve",
                "enumeration": ["49", "50", "51", "52", "53", "54", "55", "56", "60", "61", "62", "63", "64", "65", "66", "67", "70", "71", "72", "73", "74", "75", "98", "99"]
            });
            this._CST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_PIS_PISOutr.prototype, "vBC", {
        get: function () {
            return this._vBC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_PIS_PISOutr.prototype, "pPIS", {
        get: function () {
            return this._pPIS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pPIS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_PIS_PISOutr.prototype, "qBCProd", {
        get: function () {
            return this._qBCProd;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1204v(value);
            this._qBCProd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_PIS_PISOutr.prototype, "vAliqProd", {
        get: function () {
            return this._vAliqProd;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1104v(value);
            this._vAliqProd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_PIS_PISOutr.prototype, "vPIS", {
        get: function () {
            return this._vPIS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vPIS = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_PIS_PISOutr;
}());
exports.TNFe_InfNFe_Det_Imposto_PIS_PISOutr = TNFe_InfNFe_Det_Imposto_PIS_PISOutr;
var TNFe_InfNFe_Det_Imposto_PISST = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_PISST() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_PISST.prototype, "vBC", {
        get: function () {
            return this._vBC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_PISST.prototype, "pPIS", {
        get: function () {
            return this._pPIS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pPIS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_PISST.prototype, "qBCProd", {
        get: function () {
            return this._qBCProd;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1204(value);
            this._qBCProd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_PISST.prototype, "vAliqProd", {
        get: function () {
            return this._vAliqProd;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1104(value);
            this._vAliqProd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_PISST.prototype, "vPIS", {
        get: function () {
            return this._vPIS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vPIS = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_PISST;
}());
exports.TNFe_InfNFe_Det_Imposto_PISST = TNFe_InfNFe_Det_Imposto_PISST;
var TNFe_InfNFe_Det_Imposto_COFINS = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_COFINS() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_COFINS.prototype, "COFINSAliq", {
        get: function () {
            return this._COFINSAliq;
        },
        set: function (value) {
            this._COFINSAliq = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_COFINS.prototype, "COFINSQtde", {
        get: function () {
            return this._COFINSQtde;
        },
        set: function (value) {
            this._COFINSQtde = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_COFINS.prototype, "COFINSNT", {
        get: function () {
            return this._COFINSNT;
        },
        set: function (value) {
            this._COFINSNT = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_COFINS.prototype, "COFINSOutr", {
        get: function () {
            return this._COFINSOutr;
        },
        set: function (value) {
            this._COFINSOutr = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_COFINS;
}());
exports.TNFe_InfNFe_Det_Imposto_COFINS = TNFe_InfNFe_Det_Imposto_COFINS;
var TNFe_InfNFe_Det_Imposto_COFINS_COFINSAliq = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_COFINS_COFINSAliq() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_COFINS_COFINSAliq.prototype, "CST", {
        get: function () {
            return this._CST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["01", "02"] });
            this._CST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_COFINS_COFINSAliq.prototype, "vBC", {
        get: function () {
            return this._vBC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_COFINS_COFINSAliq.prototype, "pCOFINS", {
        get: function () {
            return this._pCOFINS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pCOFINS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_COFINS_COFINSAliq.prototype, "vCOFINS", {
        get: function () {
            return this._vCOFINS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vCOFINS = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_COFINS_COFINSAliq;
}());
exports.TNFe_InfNFe_Det_Imposto_COFINS_COFINSAliq = TNFe_InfNFe_Det_Imposto_COFINS_COFINSAliq;
var TNFe_InfNFe_Det_Imposto_COFINS_COFINSQtde = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_COFINS_COFINSQtde() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_COFINS_COFINSQtde.prototype, "CST", {
        get: function () {
            return this._CST;
        },
        set: function (value) {
            Model_1.validate(value, { "enumeration": ["03"] });
            this._CST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_COFINS_COFINSQtde.prototype, "qBCProd", {
        get: function () {
            return this._qBCProd;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1204v(value);
            this._qBCProd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_COFINS_COFINSQtde.prototype, "vAliqProd", {
        get: function () {
            return this._vAliqProd;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1104v(value);
            this._vAliqProd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_COFINS_COFINSQtde.prototype, "vCOFINS", {
        get: function () {
            return this._vCOFINS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vCOFINS = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_COFINS_COFINSQtde;
}());
exports.TNFe_InfNFe_Det_Imposto_COFINS_COFINSQtde = TNFe_InfNFe_Det_Imposto_COFINS_COFINSQtde;
var TNFe_InfNFe_Det_Imposto_COFINS_COFINSNT = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_COFINS_COFINSNT() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_COFINS_COFINSNT.prototype, "CST", {
        get: function () {
            return this._CST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["04", "05", "06", "07", "08", "09"] });
            this._CST = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_COFINS_COFINSNT;
}());
exports.TNFe_InfNFe_Det_Imposto_COFINS_COFINSNT = TNFe_InfNFe_Det_Imposto_COFINS_COFINSNT;
var TNFe_InfNFe_Det_Imposto_COFINS_COFINSOutr = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_COFINS_COFINSOutr() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_COFINS_COFINSOutr.prototype, "CST", {
        get: function () {
            return this._CST;
        },
        set: function (value) {
            Model_1.validate(value, {
                "whiteSpace": "preserve",
                "enumeration": ["49", "50", "51", "52", "53", "54", "55", "56", "60", "61", "62", "63", "64", "65", "66", "67", "70", "71", "72", "73", "74", "75", "98", "99"]
            });
            this._CST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_COFINS_COFINSOutr.prototype, "vBC", {
        get: function () {
            return this._vBC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_COFINS_COFINSOutr.prototype, "pCOFINS", {
        get: function () {
            return this._pCOFINS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pCOFINS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_COFINS_COFINSOutr.prototype, "qBCProd", {
        get: function () {
            return this._qBCProd;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1204v(value);
            this._qBCProd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_COFINS_COFINSOutr.prototype, "vAliqProd", {
        get: function () {
            return this._vAliqProd;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1104v(value);
            this._vAliqProd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_COFINS_COFINSOutr.prototype, "vCOFINS", {
        get: function () {
            return this._vCOFINS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vCOFINS = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_COFINS_COFINSOutr;
}());
exports.TNFe_InfNFe_Det_Imposto_COFINS_COFINSOutr = TNFe_InfNFe_Det_Imposto_COFINS_COFINSOutr;
var TNFe_InfNFe_Det_Imposto_COFINSST = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_COFINSST() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_COFINSST.prototype, "vBC", {
        get: function () {
            return this._vBC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_COFINSST.prototype, "pCOFINS", {
        get: function () {
            return this._pCOFINS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pCOFINS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_COFINSST.prototype, "qBCProd", {
        get: function () {
            return this._qBCProd;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1204(value);
            this._qBCProd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_COFINSST.prototype, "vAliqProd", {
        get: function () {
            return this._vAliqProd;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1104(value);
            this._vAliqProd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_COFINSST.prototype, "vCOFINS", {
        get: function () {
            return this._vCOFINS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vCOFINS = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_COFINSST;
}());
exports.TNFe_InfNFe_Det_Imposto_COFINSST = TNFe_InfNFe_Det_Imposto_COFINSST;
var TNFe_InfNFe_Det_Imposto_ICMSUFDest = /** @class */ (function () {
    function TNFe_InfNFe_Det_Imposto_ICMSUFDest() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMSUFDest.prototype, "vBCUFDest", {
        get: function () {
            return this._vBCUFDest;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCUFDest = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMSUFDest.prototype, "vBCFCPUFDest", {
        get: function () {
            return this._vBCFCPUFDest;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCFCPUFDest = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMSUFDest.prototype, "pFCPUFDest", {
        get: function () {
            return this._pFCPUFDest;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pFCPUFDest = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMSUFDest.prototype, "pICMSUFDest", {
        get: function () {
            return this._pICMSUFDest;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pICMSUFDest = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMSUFDest.prototype, "pICMSInter", {
        get: function () {
            return this._pICMSInter;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["4.00", "7.00", "12.00"] });
            this._pICMSInter = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMSUFDest.prototype, "pICMSInterPart", {
        get: function () {
            return this._pICMSInterPart;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pICMSInterPart = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMSUFDest.prototype, "vFCPUFDest", {
        get: function () {
            return this._vFCPUFDest;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vFCPUFDest = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMSUFDest.prototype, "vICMSUFDest", {
        get: function () {
            return this._vICMSUFDest;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMSUFDest = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_Imposto_ICMSUFDest.prototype, "vICMSUFRemet", {
        get: function () {
            return this._vICMSUFRemet;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMSUFRemet = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_Imposto_ICMSUFDest;
}());
exports.TNFe_InfNFe_Det_Imposto_ICMSUFDest = TNFe_InfNFe_Det_Imposto_ICMSUFDest;
var TNFe_InfNFe_Det_ImpostoDevol = /** @class */ (function () {
    function TNFe_InfNFe_Det_ImpostoDevol() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_ImpostoDevol.prototype, "pDevol", {
        get: function () {
            return this._pDevol;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302Max100(value);
            this._pDevol = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Det_ImpostoDevol.prototype, "IPI", {
        get: function () {
            return this._IPI;
        },
        set: function (value) {
            this._IPI = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_ImpostoDevol;
}());
exports.TNFe_InfNFe_Det_ImpostoDevol = TNFe_InfNFe_Det_ImpostoDevol;
var TNFe_InfNFe_Det_ImpostoDevol_IPI = /** @class */ (function () {
    function TNFe_InfNFe_Det_ImpostoDevol_IPI() {
    }
    Object.defineProperty(TNFe_InfNFe_Det_ImpostoDevol_IPI.prototype, "vIPIDevol", {
        get: function () {
            return this._vIPIDevol;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vIPIDevol = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Det_ImpostoDevol_IPI;
}());
exports.TNFe_InfNFe_Det_ImpostoDevol_IPI = TNFe_InfNFe_Det_ImpostoDevol_IPI;
var TNFe_InfNFe_Total = /** @class */ (function () {
    function TNFe_InfNFe_Total() {
    }
    Object.defineProperty(TNFe_InfNFe_Total.prototype, "ICMSTot", {
        get: function () {
            return this._ICMSTot;
        },
        set: function (value) {
            this._ICMSTot = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total.prototype, "ISSQNtot", {
        get: function () {
            return this._ISSQNtot;
        },
        set: function (value) {
            this._ISSQNtot = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total.prototype, "retTrib", {
        get: function () {
            return this._retTrib;
        },
        set: function (value) {
            this._retTrib = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Total;
}());
exports.TNFe_InfNFe_Total = TNFe_InfNFe_Total;
var TNFe_InfNFe_Total_ICMSTot = /** @class */ (function () {
    function TNFe_InfNFe_Total_ICMSTot() {
    }
    Object.defineProperty(TNFe_InfNFe_Total_ICMSTot.prototype, "vBC", {
        get: function () {
            return this._vBC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ICMSTot.prototype, "vICMS", {
        get: function () {
            return this._vICMS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ICMSTot.prototype, "vICMSDeson", {
        get: function () {
            return this._vICMSDeson;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMSDeson = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ICMSTot.prototype, "vFCPUFDest", {
        get: function () {
            return this._vFCPUFDest;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vFCPUFDest = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ICMSTot.prototype, "vICMSUFDest", {
        get: function () {
            return this._vICMSUFDest;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMSUFDest = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ICMSTot.prototype, "vICMSUFRemet", {
        get: function () {
            return this._vICMSUFRemet;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMSUFRemet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ICMSTot.prototype, "vFCP", {
        get: function () {
            return this._vFCP;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vFCP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ICMSTot.prototype, "vBCST", {
        get: function () {
            return this._vBCST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ICMSTot.prototype, "vST", {
        get: function () {
            return this._vST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ICMSTot.prototype, "vFCPST", {
        get: function () {
            return this._vFCPST;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vFCPST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ICMSTot.prototype, "vFCPSTRet", {
        get: function () {
            return this._vFCPSTRet;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vFCPSTRet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ICMSTot.prototype, "vProd", {
        get: function () {
            return this._vProd;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vProd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ICMSTot.prototype, "vFrete", {
        get: function () {
            return this._vFrete;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vFrete = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ICMSTot.prototype, "vSeg", {
        get: function () {
            return this._vSeg;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vSeg = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ICMSTot.prototype, "vDesc", {
        get: function () {
            return this._vDesc;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vDesc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ICMSTot.prototype, "vII", {
        get: function () {
            return this._vII;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vII = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ICMSTot.prototype, "vIPI", {
        get: function () {
            return this._vIPI;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vIPI = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ICMSTot.prototype, "vIPIDevol", {
        get: function () {
            return this._vIPIDevol;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vIPIDevol = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ICMSTot.prototype, "vPIS", {
        get: function () {
            return this._vPIS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vPIS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ICMSTot.prototype, "vCOFINS", {
        get: function () {
            return this._vCOFINS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vCOFINS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ICMSTot.prototype, "vOutro", {
        get: function () {
            return this._vOutro;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vOutro = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ICMSTot.prototype, "vNF", {
        get: function () {
            return this._vNF;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vNF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ICMSTot.prototype, "vTotTrib", {
        get: function () {
            return this._vTotTrib;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vTotTrib = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Total_ICMSTot;
}());
exports.TNFe_InfNFe_Total_ICMSTot = TNFe_InfNFe_Total_ICMSTot;
var TNFe_InfNFe_Total_ISSQNtot = /** @class */ (function () {
    function TNFe_InfNFe_Total_ISSQNtot() {
    }
    Object.defineProperty(TNFe_InfNFe_Total_ISSQNtot.prototype, "vServ", {
        get: function () {
            return this._vServ;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vServ = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ISSQNtot.prototype, "vBC", {
        get: function () {
            return this._vBC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ISSQNtot.prototype, "vISS", {
        get: function () {
            return this._vISS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vISS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ISSQNtot.prototype, "vPIS", {
        get: function () {
            return this._vPIS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vPIS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ISSQNtot.prototype, "vCOFINS", {
        get: function () {
            return this._vCOFINS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vCOFINS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ISSQNtot.prototype, "dCompet", {
        get: function () {
            return this._dCompet;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TData(value);
            this._dCompet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ISSQNtot.prototype, "vDeducao", {
        get: function () {
            return this._vDeducao;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vDeducao = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ISSQNtot.prototype, "vOutro", {
        get: function () {
            return this._vOutro;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vOutro = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ISSQNtot.prototype, "vDescIncond", {
        get: function () {
            return this._vDescIncond;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vDescIncond = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ISSQNtot.prototype, "vDescCond", {
        get: function () {
            return this._vDescCond;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vDescCond = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ISSQNtot.prototype, "vISSRet", {
        get: function () {
            return this._vISSRet;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vISSRet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_ISSQNtot.prototype, "cRegTrib", {
        get: function () {
            return this._cRegTrib;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["1", "2", "3", "4", "5", "6"] });
            this._cRegTrib = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Total_ISSQNtot;
}());
exports.TNFe_InfNFe_Total_ISSQNtot = TNFe_InfNFe_Total_ISSQNtot;
var TNFe_InfNFe_Total_RetTrib = /** @class */ (function () {
    function TNFe_InfNFe_Total_RetTrib() {
    }
    Object.defineProperty(TNFe_InfNFe_Total_RetTrib.prototype, "vRetPIS", {
        get: function () {
            return this._vRetPIS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vRetPIS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_RetTrib.prototype, "vRetCOFINS", {
        get: function () {
            return this._vRetCOFINS;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vRetCOFINS = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_RetTrib.prototype, "vRetCSLL", {
        get: function () {
            return this._vRetCSLL;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vRetCSLL = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_RetTrib.prototype, "vBCIRRF", {
        get: function () {
            return this._vBCIRRF;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vBCIRRF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_RetTrib.prototype, "vIRRF", {
        get: function () {
            return this._vIRRF;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vIRRF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_RetTrib.prototype, "vBCRetPrev", {
        get: function () {
            return this._vBCRetPrev;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vBCRetPrev = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Total_RetTrib.prototype, "vRetPrev", {
        get: function () {
            return this._vRetPrev;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vRetPrev = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Total_RetTrib;
}());
exports.TNFe_InfNFe_Total_RetTrib = TNFe_InfNFe_Total_RetTrib;
var TNFe_InfNFe_Transp = /** @class */ (function () {
    function TNFe_InfNFe_Transp() {
    }
    Object.defineProperty(TNFe_InfNFe_Transp.prototype, "modFrete", {
        get: function () {
            return this._modFrete;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "9"] });
            this._modFrete = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Transp.prototype, "transporta", {
        get: function () {
            return this._transporta;
        },
        set: function (value) {
            this._transporta = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Transp.prototype, "retTransp", {
        get: function () {
            return this._retTransp;
        },
        set: function (value) {
            this._retTransp = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Transp.prototype, "veicTransp", {
        get: function () {
            return this._veicTransp;
        },
        set: function (value) {
            undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Transp.prototype, "reboque", {
        get: function () {
            return this._reboque;
        },
        set: function (value) {
            undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Transp.prototype, "vagao", {
        get: function () {
            return this._vagao;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "20" });
            this._vagao = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Transp.prototype, "balsa", {
        get: function () {
            return this._balsa;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "20" });
            this._balsa = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Transp.prototype, "vol", {
        get: function () {
            return this._vol;
        },
        set: function (value) {
            this._vol = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Transp;
}());
exports.TNFe_InfNFe_Transp = TNFe_InfNFe_Transp;
var TNFe_InfNFe_Transp_Transporta = /** @class */ (function () {
    function TNFe_InfNFe_Transp_Transporta() {
    }
    Object.defineProperty(TNFe_InfNFe_Transp_Transporta.prototype, "CNPJ", {
        get: function () {
            return this._CNPJ;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCnpj(value);
            this._CNPJ = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Transp_Transporta.prototype, "CPF", {
        get: function () {
            return this._CPF;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCpf(value);
            this._CPF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Transp_Transporta.prototype, "xNome", {
        get: function () {
            return this._xNome;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "60", "minLength": "2" });
            this._xNome = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Transp_Transporta.prototype, "IE", {
        get: function () {
            return this._IE;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TIeDest(value);
            this._IE = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Transp_Transporta.prototype, "xEnder", {
        get: function () {
            return this._xEnder;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "60" });
            this._xEnder = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Transp_Transporta.prototype, "xMun", {
        get: function () {
            return this._xMun;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "60", "minLength": "1" });
            this._xMun = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Transp_Transporta.prototype, "UF", {
        get: function () {
            return this._UF;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TUf(value);
            this._UF = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Transp_Transporta;
}());
exports.TNFe_InfNFe_Transp_Transporta = TNFe_InfNFe_Transp_Transporta;
var TNFe_InfNFe_Transp_RetTransp = /** @class */ (function () {
    function TNFe_InfNFe_Transp_RetTransp() {
    }
    Object.defineProperty(TNFe_InfNFe_Transp_RetTransp.prototype, "vServ", {
        get: function () {
            return this._vServ;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vServ = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Transp_RetTransp.prototype, "vBCRet", {
        get: function () {
            return this._vBCRet;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBCRet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Transp_RetTransp.prototype, "pICMSRet", {
        get: function () {
            return this._pICMSRet;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pICMSRet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Transp_RetTransp.prototype, "vICMSRet", {
        get: function () {
            return this._vICMSRet;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vICMSRet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Transp_RetTransp.prototype, "CFOP", {
        get: function () {
            return this._CFOP;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[1,2,3,5,6,7]{1}[0-9]{3}" });
            this._CFOP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Transp_RetTransp.prototype, "cMunFG", {
        get: function () {
            return this._cMunFG;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCodMunIBGE(value);
            this._cMunFG = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Transp_RetTransp;
}());
exports.TNFe_InfNFe_Transp_RetTransp = TNFe_InfNFe_Transp_RetTransp;
var TNFe_InfNFe_Transp_Vol = /** @class */ (function () {
    function TNFe_InfNFe_Transp_Vol() {
    }
    Object.defineProperty(TNFe_InfNFe_Transp_Vol.prototype, "qVol", {
        get: function () {
            return this._qVol;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{1,15}" });
            this._qVol = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Transp_Vol.prototype, "esp", {
        get: function () {
            return this._esp;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "60" });
            this._esp = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Transp_Vol.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "60" });
            this._marca = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Transp_Vol.prototype, "nVol", {
        get: function () {
            return this._nVol;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "60" });
            this._nVol = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Transp_Vol.prototype, "pesoL", {
        get: function () {
            return this._pesoL;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1203(value);
            this._pesoL = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Transp_Vol.prototype, "pesoB", {
        get: function () {
            return this._pesoB;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1203(value);
            this._pesoB = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Transp_Vol.prototype, "lacres", {
        get: function () {
            return this._lacres;
        },
        set: function (value) {
            this._lacres = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Transp_Vol;
}());
exports.TNFe_InfNFe_Transp_Vol = TNFe_InfNFe_Transp_Vol;
var TNFe_InfNFe_Transp_Vol_Lacres = /** @class */ (function () {
    function TNFe_InfNFe_Transp_Vol_Lacres() {
    }
    Object.defineProperty(TNFe_InfNFe_Transp_Vol_Lacres.prototype, "nLacre", {
        get: function () {
            return this._nLacre;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "60" });
            this._nLacre = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Transp_Vol_Lacres;
}());
exports.TNFe_InfNFe_Transp_Vol_Lacres = TNFe_InfNFe_Transp_Vol_Lacres;
var TNFe_InfNFe_Cobr = /** @class */ (function () {
    function TNFe_InfNFe_Cobr() {
    }
    Object.defineProperty(TNFe_InfNFe_Cobr.prototype, "fat", {
        get: function () {
            return this._fat;
        },
        set: function (value) {
            this._fat = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Cobr.prototype, "dup", {
        get: function () {
            return this._dup;
        },
        set: function (value) {
            this._dup = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Cobr;
}());
exports.TNFe_InfNFe_Cobr = TNFe_InfNFe_Cobr;
var TNFe_InfNFe_Cobr_Fat = /** @class */ (function () {
    function TNFe_InfNFe_Cobr_Fat() {
    }
    Object.defineProperty(TNFe_InfNFe_Cobr_Fat.prototype, "nFat", {
        get: function () {
            return this._nFat;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "60" });
            this._nFat = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Cobr_Fat.prototype, "vOrig", {
        get: function () {
            return this._vOrig;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vOrig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Cobr_Fat.prototype, "vDesc", {
        get: function () {
            return this._vDesc;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vDesc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Cobr_Fat.prototype, "vLiq", {
        get: function () {
            return this._vLiq;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vLiq = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Cobr_Fat;
}());
exports.TNFe_InfNFe_Cobr_Fat = TNFe_InfNFe_Cobr_Fat;
var TNFe_InfNFe_Cobr_Dup = /** @class */ (function () {
    function TNFe_InfNFe_Cobr_Dup() {
    }
    Object.defineProperty(TNFe_InfNFe_Cobr_Dup.prototype, "nDup", {
        get: function () {
            return this._nDup;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "60", "minLength": "1" });
            this._nDup = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Cobr_Dup.prototype, "dVenc", {
        get: function () {
            return this._dVenc;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TData(value);
            this._dVenc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Cobr_Dup.prototype, "vDup", {
        get: function () {
            return this._vDup;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302Opc(value);
            this._vDup = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Cobr_Dup;
}());
exports.TNFe_InfNFe_Cobr_Dup = TNFe_InfNFe_Cobr_Dup;
var TNFe_InfNFe_Pag = /** @class */ (function () {
    function TNFe_InfNFe_Pag() {
    }
    Object.defineProperty(TNFe_InfNFe_Pag.prototype, "detPag", {
        get: function () {
            return this._detPag;
        },
        set: function (value) {
            this._detPag = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Pag.prototype, "vTroco", {
        get: function () {
            return this._vTroco;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vTroco = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Pag;
}());
exports.TNFe_InfNFe_Pag = TNFe_InfNFe_Pag;
var TNFe_InfNFe_Pag_DetPag = /** @class */ (function () {
    function TNFe_InfNFe_Pag_DetPag() {
    }
    Object.defineProperty(TNFe_InfNFe_Pag_DetPag.prototype, "indPag", {
        get: function () {
            return this._indPag;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1"] });
            this._indPag = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Pag_DetPag.prototype, "tPag", {
        get: function () {
            return this._tPag;
        },
        set: function (value) {
            Model_1.validate(value, {
                "whiteSpace": "preserve",
                "enumeration": ["01", "02", "03", "04", "05", "10", "11", "12", "13", "14", "15", "90", "99"]
            });
            this._tPag = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Pag_DetPag.prototype, "vPag", {
        get: function () {
            return this._vPag;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vPag = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Pag_DetPag.prototype, "card", {
        get: function () {
            return this._card;
        },
        set: function (value) {
            this._card = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Pag_DetPag;
}());
exports.TNFe_InfNFe_Pag_DetPag = TNFe_InfNFe_Pag_DetPag;
var TNFe_InfNFe_Pag_DetPag_Card = /** @class */ (function () {
    function TNFe_InfNFe_Pag_DetPag_Card() {
    }
    Object.defineProperty(TNFe_InfNFe_Pag_DetPag_Card.prototype, "tpIntegra", {
        get: function () {
            return this._tpIntegra;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["1", "2"] });
            this._tpIntegra = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Pag_DetPag_Card.prototype, "CNPJ", {
        get: function () {
            return this._CNPJ;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCnpj(value);
            this._CNPJ = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Pag_DetPag_Card.prototype, "tBand", {
        get: function () {
            return this._tBand;
        },
        set: function (value) {
            Model_1.validate(value, {
                "whiteSpace": "preserve",
                "enumeration": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "99"]
            });
            this._tBand = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Pag_DetPag_Card.prototype, "cAut", {
        get: function () {
            return this._cAut;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "20" });
            this._cAut = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Pag_DetPag_Card;
}());
exports.TNFe_InfNFe_Pag_DetPag_Card = TNFe_InfNFe_Pag_DetPag_Card;
var TNFe_InfNFe_InfAdic = /** @class */ (function () {
    function TNFe_InfNFe_InfAdic() {
    }
    Object.defineProperty(TNFe_InfNFe_InfAdic.prototype, "infAdFisco", {
        get: function () {
            return this._infAdFisco;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "2000", "minLength": "1" });
            this._infAdFisco = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_InfAdic.prototype, "infCpl", {
        get: function () {
            return this._infCpl;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "5000", "minLength": "1" });
            this._infCpl = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_InfAdic.prototype, "obsCont", {
        get: function () {
            return this._obsCont;
        },
        set: function (value) {
            this._obsCont = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_InfAdic.prototype, "obsFisco", {
        get: function () {
            return this._obsFisco;
        },
        set: function (value) {
            this._obsFisco = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_InfAdic.prototype, "procRef", {
        get: function () {
            return this._procRef;
        },
        set: function (value) {
            this._procRef = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_InfAdic;
}());
exports.TNFe_InfNFe_InfAdic = TNFe_InfNFe_InfAdic;
var TNFe_InfNFe_InfAdic_ObsCont = /** @class */ (function () {
    function TNFe_InfNFe_InfAdic_ObsCont() {
    }
    Object.defineProperty(TNFe_InfNFe_InfAdic_ObsCont.prototype, "xTexto", {
        get: function () {
            return this._xTexto;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "60" });
            this._xTexto = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_InfAdic_ObsCont.prototype, "xCampo", {
        get: function () {
            return this._xCampo;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "20" });
            this._xCampo = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_InfAdic_ObsCont;
}());
exports.TNFe_InfNFe_InfAdic_ObsCont = TNFe_InfNFe_InfAdic_ObsCont;
var TNFe_InfNFe_InfAdic_ObsFisco = /** @class */ (function () {
    function TNFe_InfNFe_InfAdic_ObsFisco() {
    }
    Object.defineProperty(TNFe_InfNFe_InfAdic_ObsFisco.prototype, "xTexto", {
        get: function () {
            return this._xTexto;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "60" });
            this._xTexto = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_InfAdic_ObsFisco.prototype, "xCampo", {
        get: function () {
            return this._xCampo;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "20" });
            this._xCampo = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_InfAdic_ObsFisco;
}());
exports.TNFe_InfNFe_InfAdic_ObsFisco = TNFe_InfNFe_InfAdic_ObsFisco;
var TNFe_InfNFe_InfAdic_ProcRef = /** @class */ (function () {
    function TNFe_InfNFe_InfAdic_ProcRef() {
    }
    Object.defineProperty(TNFe_InfNFe_InfAdic_ProcRef.prototype, "nProc", {
        get: function () {
            return this._nProc;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "60" });
            this._nProc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_InfAdic_ProcRef.prototype, "indProc", {
        get: function () {
            return this._indProc;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "9"] });
            this._indProc = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_InfAdic_ProcRef;
}());
exports.TNFe_InfNFe_InfAdic_ProcRef = TNFe_InfNFe_InfAdic_ProcRef;
var TNFe_InfNFe_Exporta = /** @class */ (function () {
    function TNFe_InfNFe_Exporta() {
    }
    Object.defineProperty(TNFe_InfNFe_Exporta.prototype, "UFSaidaPais", {
        get: function () {
            return this._UFSaidaPais;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TUfEmi(value);
            this._UFSaidaPais = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Exporta.prototype, "xLocExporta", {
        get: function () {
            return this._xLocExporta;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "60" });
            this._xLocExporta = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Exporta.prototype, "xLocDespacho", {
        get: function () {
            return this._xLocDespacho;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "60" });
            this._xLocDespacho = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Exporta;
}());
exports.TNFe_InfNFe_Exporta = TNFe_InfNFe_Exporta;
var TNFe_InfNFe_Compra = /** @class */ (function () {
    function TNFe_InfNFe_Compra() {
    }
    Object.defineProperty(TNFe_InfNFe_Compra.prototype, "xNEmp", {
        get: function () {
            return this._xNEmp;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "22" });
            this._xNEmp = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Compra.prototype, "xPed", {
        get: function () {
            return this._xPed;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "60" });
            this._xPed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Compra.prototype, "xCont", {
        get: function () {
            return this._xCont;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "60" });
            this._xCont = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Compra;
}());
exports.TNFe_InfNFe_Compra = TNFe_InfNFe_Compra;
var TNFe_InfNFe_Cana = /** @class */ (function () {
    function TNFe_InfNFe_Cana() {
    }
    Object.defineProperty(TNFe_InfNFe_Cana.prototype, "safra", {
        get: function () {
            return this._safra;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "4", "maxLength": "9" });
            this._safra = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Cana.prototype, "ref", {
        get: function () {
            return this._ref;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "(0[1-9]|1[0-2])([/][2][0-9][0-9][0-9])" });
            this._ref = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Cana.prototype, "forDia", {
        get: function () {
            return this._forDia;
        },
        set: function (value) {
            this._forDia = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Cana.prototype, "qTotMes", {
        get: function () {
            return this._qTotMes;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1110v(value);
            this._qTotMes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Cana.prototype, "qTotAnt", {
        get: function () {
            return this._qTotAnt;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1110v(value);
            this._qTotAnt = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Cana.prototype, "qTotGer", {
        get: function () {
            return this._qTotGer;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1110v(value);
            this._qTotGer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Cana.prototype, "deduc", {
        get: function () {
            return this._deduc;
        },
        set: function (value) {
            this._deduc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Cana.prototype, "vFor", {
        get: function () {
            return this._vFor;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vFor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Cana.prototype, "vTotDed", {
        get: function () {
            return this._vTotDed;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vTotDed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Cana.prototype, "vLiqFor", {
        get: function () {
            return this._vLiqFor;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vLiqFor = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Cana;
}());
exports.TNFe_InfNFe_Cana = TNFe_InfNFe_Cana;
var TNFe_InfNFe_Cana_ForDia = /** @class */ (function () {
    function TNFe_InfNFe_Cana_ForDia() {
    }
    Object.defineProperty(TNFe_InfNFe_Cana_ForDia.prototype, "qtde", {
        get: function () {
            return this._qtde;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1110v(value);
            this._qtde = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Cana_ForDia.prototype, "dia", {
        get: function () {
            return this._dia;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[1-9]|[1][0-9]|[2][0-9]|[3][0-1]" });
            this._dia = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Cana_ForDia;
}());
exports.TNFe_InfNFe_Cana_ForDia = TNFe_InfNFe_Cana_ForDia;
var TNFe_InfNFe_Cana_Deduc = /** @class */ (function () {
    function TNFe_InfNFe_Cana_Deduc() {
    }
    Object.defineProperty(TNFe_InfNFe_Cana_Deduc.prototype, "xDed", {
        get: function () {
            return this._xDed;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "60" });
            this._xDed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFe_Cana_Deduc.prototype, "vDed", {
        get: function () {
            return this._vDed;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vDed = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFe_Cana_Deduc;
}());
exports.TNFe_InfNFe_Cana_Deduc = TNFe_InfNFe_Cana_Deduc;
var TNFe_InfNFeSupl = /** @class */ (function () {
    function TNFe_InfNFeSupl() {
    }
    Object.defineProperty(TNFe_InfNFeSupl.prototype, "qrCode", {
        get: function () {
            return this._qrCode;
        },
        set: function (value) {
            Model_1.validate(value, {
                "whiteSpace": "preserve",
                "minLength": "100",
                "maxLength": "600",
                "pattern": "(((HTTPS?|https?)://.*\\?chNFe=[0-9]{44}&amp;nVersao=[0-9]{3}&amp;tpAmb=[1-2](&amp;cDest=([A-Za-z0-9.:+-/)(]{0}|[A-Za-z0-9.:+-/)(]{5,20})?)?&amp;dhEmi=[A-Fa-f0-9]{50}&amp;vNF=(0|0\\.[0-9]{2}|[1-9]{1}[0-9]{0,12}(\\.[0-9]{2})?)&amp;vICMS=(0|0\\.[0-9]{2}|[1-9]{1}[0-9]{0,12}(\\.[0-9]{2})?)&amp;digVal=[A-Fa-f0-9]{56}&amp;cIdToken=[0-9]{6}&amp;cHashQRCode=[A-Fa-f0-9]{40})|((HTTPS?|https?)://.*\\?p=[0-9]{44}\\|[2]\\|[1-2]\\|(([0]{1}[1-9]{1}|[1-2]{1}[0-9]{1}|[3]{1}[0-1]{1})\\|(0|0\\.[0-9]{2}|[1-9]{1}[0-9]{0,12}(\\.[0-9]{2})?)\\|[A-Fa-f0-9]{56}\\|)?(0|[1-9]{1}([0-9]{1,5})?)\\|[A-Fa-f0-9]{40}))"
            });
            this._qrCode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNFe_InfNFeSupl.prototype, "urlChave", {
        get: function () {
            return this._urlChave;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "21", "maxLength": "85" });
            this._urlChave = value;
        },
        enumerable: true,
        configurable: true
    });
    return TNFe_InfNFeSupl;
}());
exports.TNFe_InfNFeSupl = TNFe_InfNFeSupl;
var TProtNFe = /** @class */ (function () {
    function TProtNFe() {
    }
    Object.defineProperty(TProtNFe.prototype, "infProt", {
        get: function () {
            return this._infProt;
        },
        set: function (value) {
            this._infProt = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TProtNFe.prototype, "undefined", {
        get: function () {
            return this._undefined;
        },
        set: function (value) {
            undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TProtNFe.prototype, "versao", {
        get: function () {
            return this._versao;
        },
        set: function (value) {
            undefined;
        },
        enumerable: true,
        configurable: true
    });
    return TProtNFe;
}());
exports.TProtNFe = TProtNFe;
var TProtNFe_InfProt = /** @class */ (function () {
    function TProtNFe_InfProt() {
    }
    Object.defineProperty(TProtNFe_InfProt.prototype, "tpAmb", {
        get: function () {
            return this._tpAmb;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TAmb(value);
            this._tpAmb = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TProtNFe_InfProt.prototype, "verAplic", {
        get: function () {
            return this._verAplic;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TVerAplic(value);
            this._verAplic = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TProtNFe_InfProt.prototype, "chNFe", {
        get: function () {
            return this._chNFe;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TChNFe(value);
            this._chNFe = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TProtNFe_InfProt.prototype, "dhRecbto", {
        get: function () {
            return this._dhRecbto;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDateTimeUTC(value);
            this._dhRecbto = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TProtNFe_InfProt.prototype, "nProt", {
        get: function () {
            return this._nProt;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TProt(value);
            this._nProt = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TProtNFe_InfProt.prototype, "digVal", {
        get: function () {
            return this._digVal;
        },
        set: function (value) {
            undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TProtNFe_InfProt.prototype, "cStat", {
        get: function () {
            return this._cStat;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TStat(value);
            this._cStat = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TProtNFe_InfProt.prototype, "xMotivo", {
        get: function () {
            return this._xMotivo;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TMotivo(value);
            this._xMotivo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TProtNFe_InfProt.prototype, "Id", {
        get: function () {
            return this._Id;
        },
        set: function (value) {
            undefined;
        },
        enumerable: true,
        configurable: true
    });
    return TProtNFe_InfProt;
}());
exports.TProtNFe_InfProt = TProtNFe_InfProt;
var TEnviNFe = /** @class */ (function () {
    function TEnviNFe() {
    }
    Object.defineProperty(TEnviNFe.prototype, "idLote", {
        get: function () {
            return this._idLote;
        },
        set: function (value) {
            exports.TIdLote(value);
            this._idLote = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEnviNFe.prototype, "indSinc", {
        get: function () {
            return this._indSinc;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["0", "1"] });
            this._indSinc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEnviNFe.prototype, "NFe", {
        get: function () {
            return this._NFe;
        },
        set: function (value) {
            undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEnviNFe.prototype, "versao", {
        get: function () {
            return this._versao;
        },
        set: function (value) {
            undefined;
        },
        enumerable: true,
        configurable: true
    });
    return TEnviNFe;
}());
exports.TEnviNFe = TEnviNFe;
var TRetEnviNFe = /** @class */ (function () {
    function TRetEnviNFe() {
    }
    Object.defineProperty(TRetEnviNFe.prototype, "tpAmb", {
        get: function () {
            return this._tpAmb;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TAmb(value);
            this._tpAmb = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TRetEnviNFe.prototype, "verAplic", {
        get: function () {
            return this._verAplic;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TVerAplic(value);
            this._verAplic = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TRetEnviNFe.prototype, "cStat", {
        get: function () {
            return this._cStat;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TStat(value);
            this._cStat = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TRetEnviNFe.prototype, "xMotivo", {
        get: function () {
            return this._xMotivo;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TMotivo(value);
            this._xMotivo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TRetEnviNFe.prototype, "cUF", {
        get: function () {
            return this._cUF;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCodUfIBGE(value);
            this._cUF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TRetEnviNFe.prototype, "dhRecbto", {
        get: function () {
            return this._dhRecbto;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDateTimeUTC(value);
            this._dhRecbto = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TRetEnviNFe.prototype, "infRec", {
        get: function () {
            return this._infRec;
        },
        set: function (value) {
            this._infRec = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TRetEnviNFe.prototype, "protNFe", {
        get: function () {
            return this._protNFe;
        },
        set: function (value) {
            undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TRetEnviNFe.prototype, "versao", {
        get: function () {
            return this._versao;
        },
        set: function (value) {
            undefined;
        },
        enumerable: true,
        configurable: true
    });
    return TRetEnviNFe;
}());
exports.TRetEnviNFe = TRetEnviNFe;
var TRetEnviNFe_InfRec = /** @class */ (function () {
    function TRetEnviNFe_InfRec() {
    }
    Object.defineProperty(TRetEnviNFe_InfRec.prototype, "nRec", {
        get: function () {
            return this._nRec;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TRec(value);
            this._nRec = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TRetEnviNFe_InfRec.prototype, "tMed", {
        get: function () {
            return this._tMed;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TMed(value);
            this._tMed = value;
        },
        enumerable: true,
        configurable: true
    });
    return TRetEnviNFe_InfRec;
}());
exports.TRetEnviNFe_InfRec = TRetEnviNFe_InfRec;
var TConsReciNFe = /** @class */ (function () {
    function TConsReciNFe() {
    }
    Object.defineProperty(TConsReciNFe.prototype, "tpAmb", {
        get: function () {
            return this._tpAmb;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TAmb(value);
            this._tpAmb = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TConsReciNFe.prototype, "nRec", {
        get: function () {
            return this._nRec;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TRec(value);
            this._nRec = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TConsReciNFe.prototype, "versao", {
        get: function () {
            return this._versao;
        },
        set: function (value) {
            undefined;
        },
        enumerable: true,
        configurable: true
    });
    return TConsReciNFe;
}());
exports.TConsReciNFe = TConsReciNFe;
var TRetConsReciNFe = /** @class */ (function () {
    function TRetConsReciNFe() {
    }
    Object.defineProperty(TRetConsReciNFe.prototype, "tpAmb", {
        get: function () {
            return this._tpAmb;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TAmb(value);
            this._tpAmb = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TRetConsReciNFe.prototype, "verAplic", {
        get: function () {
            return this._verAplic;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TVerAplic(value);
            this._verAplic = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TRetConsReciNFe.prototype, "nRec", {
        get: function () {
            return this._nRec;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TRec(value);
            this._nRec = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TRetConsReciNFe.prototype, "cStat", {
        get: function () {
            return this._cStat;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TStat(value);
            this._cStat = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TRetConsReciNFe.prototype, "xMotivo", {
        get: function () {
            return this._xMotivo;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TMotivo(value);
            this._xMotivo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TRetConsReciNFe.prototype, "cUF", {
        get: function () {
            return this._cUF;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCodUfIBGE(value);
            this._cUF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TRetConsReciNFe.prototype, "dhRecbto", {
        get: function () {
            return this._dhRecbto;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDateTimeUTC(value);
            this._dhRecbto = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TRetConsReciNFe.prototype, "cMsg", {
        get: function () {
            return this._cMsg;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{1,4}" });
            this._cMsg = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TRetConsReciNFe.prototype, "xMsg", {
        get: function () {
            return this._xMsg;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "200" });
            this._xMsg = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TRetConsReciNFe.prototype, "protNFe", {
        get: function () {
            return this._protNFe;
        },
        set: function (value) {
            undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TRetConsReciNFe.prototype, "versao", {
        get: function () {
            return this._versao;
        },
        set: function (value) {
            undefined;
        },
        enumerable: true,
        configurable: true
    });
    return TRetConsReciNFe;
}());
exports.TRetConsReciNFe = TRetConsReciNFe;
var TNfeProc = /** @class */ (function () {
    function TNfeProc() {
    }
    Object.defineProperty(TNfeProc.prototype, "NFe", {
        get: function () {
            return this._NFe;
        },
        set: function (value) {
            undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNfeProc.prototype, "protNFe", {
        get: function () {
            return this._protNFe;
        },
        set: function (value) {
            undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNfeProc.prototype, "versao", {
        get: function () {
            return this._versao;
        },
        set: function (value) {
            undefined;
        },
        enumerable: true,
        configurable: true
    });
    return TNfeProc;
}());
exports.TNfeProc = TNfeProc;
var TEndereco = /** @class */ (function () {
    function TEndereco() {
    }
    Object.defineProperty(TEndereco.prototype, "xLgr", {
        get: function () {
            return this._xLgr;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "60", "minLength": "2" });
            this._xLgr = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEndereco.prototype, "nro", {
        get: function () {
            return this._nro;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "60", "minLength": "1" });
            this._nro = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEndereco.prototype, "xCpl", {
        get: function () {
            return this._xCpl;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "60", "minLength": "1" });
            this._xCpl = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEndereco.prototype, "xBairro", {
        get: function () {
            return this._xBairro;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "60", "minLength": "2" });
            this._xBairro = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEndereco.prototype, "cMun", {
        get: function () {
            return this._cMun;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCodMunIBGE(value);
            this._cMun = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEndereco.prototype, "xMun", {
        get: function () {
            return this._xMun;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "60", "minLength": "2" });
            this._xMun = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEndereco.prototype, "UF", {
        get: function () {
            return this._UF;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TUf(value);
            this._UF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEndereco.prototype, "CEP", {
        get: function () {
            return this._CEP;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{8}" });
            this._CEP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEndereco.prototype, "cPais", {
        get: function () {
            return this._cPais;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{1,4}" });
            this._cPais = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEndereco.prototype, "xPais", {
        get: function () {
            return this._xPais;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "60", "minLength": "2" });
            this._xPais = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEndereco.prototype, "fone", {
        get: function () {
            return this._fone;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{6,14}" });
            this._fone = value;
        },
        enumerable: true,
        configurable: true
    });
    return TEndereco;
}());
exports.TEndereco = TEndereco;
var TEnderEmi = /** @class */ (function () {
    function TEnderEmi() {
    }
    Object.defineProperty(TEnderEmi.prototype, "xLgr", {
        get: function () {
            return this._xLgr;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "60", "minLength": "2" });
            this._xLgr = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEnderEmi.prototype, "nro", {
        get: function () {
            return this._nro;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "60", "minLength": "1" });
            this._nro = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEnderEmi.prototype, "xCpl", {
        get: function () {
            return this._xCpl;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "60", "minLength": "1" });
            this._xCpl = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEnderEmi.prototype, "xBairro", {
        get: function () {
            return this._xBairro;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "60", "minLength": "2" });
            this._xBairro = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEnderEmi.prototype, "cMun", {
        get: function () {
            return this._cMun;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCodMunIBGE(value);
            this._cMun = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEnderEmi.prototype, "xMun", {
        get: function () {
            return this._xMun;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "60", "minLength": "2" });
            this._xMun = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEnderEmi.prototype, "UF", {
        get: function () {
            return this._UF;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TUfEmi(value);
            this._UF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEnderEmi.prototype, "CEP", {
        get: function () {
            return this._CEP;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{8}" });
            this._CEP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEnderEmi.prototype, "cPais", {
        get: function () {
            return this._cPais;
        },
        set: function (value) {
            Model_1.validate(value, { "enumeration": ["1058"] });
            this._cPais = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEnderEmi.prototype, "xPais", {
        get: function () {
            return this._xPais;
        },
        set: function (value) {
            Model_1.validate(value, { "enumeration": ["Brasil", "BRASIL"] });
            this._xPais = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEnderEmi.prototype, "fone", {
        get: function () {
            return this._fone;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{6,14}" });
            this._fone = value;
        },
        enumerable: true,
        configurable: true
    });
    return TEnderEmi;
}());
exports.TEnderEmi = TEnderEmi;
var TLocal = /** @class */ (function () {
    function TLocal() {
    }
    Object.defineProperty(TLocal.prototype, "CNPJ", {
        get: function () {
            return this._CNPJ;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCnpjOpc(value);
            this._CNPJ = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TLocal.prototype, "CPF", {
        get: function () {
            return this._CPF;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCpf(value);
            this._CPF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TLocal.prototype, "xLgr", {
        get: function () {
            return this._xLgr;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "60", "minLength": "2" });
            this._xLgr = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TLocal.prototype, "nro", {
        get: function () {
            return this._nro;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "60", "minLength": "1" });
            this._nro = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TLocal.prototype, "xCpl", {
        get: function () {
            return this._xCpl;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "60", "minLength": "1" });
            this._xCpl = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TLocal.prototype, "xBairro", {
        get: function () {
            return this._xBairro;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "60", "minLength": "2" });
            this._xBairro = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TLocal.prototype, "cMun", {
        get: function () {
            return this._cMun;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCodMunIBGE(value);
            this._cMun = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TLocal.prototype, "xMun", {
        get: function () {
            return this._xMun;
        },
        set: function (value) {
            Model_1.validate(value, { "maxLength": "60", "minLength": "2" });
            this._xMun = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TLocal.prototype, "UF", {
        get: function () {
            return this._UF;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TUf(value);
            this._UF = value;
        },
        enumerable: true,
        configurable: true
    });
    return TLocal;
}());
exports.TLocal = TLocal;
var TVeiculo = /** @class */ (function () {
    function TVeiculo() {
    }
    Object.defineProperty(TVeiculo.prototype, "placa", {
        get: function () {
            return this._placa;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[A-Z]{2,3}[0-9]{4}|[A-Z]{3,4}[0-9]{3}" });
            this._placa = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVeiculo.prototype, "UF", {
        get: function () {
            return this._UF;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TUf(value);
            this._UF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVeiculo.prototype, "RNTC", {
        get: function () {
            return this._RNTC;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "20" });
            this._RNTC = value;
        },
        enumerable: true,
        configurable: true
    });
    return TVeiculo;
}());
exports.TVeiculo = TVeiculo;
var TIpi = /** @class */ (function () {
    function TIpi() {
    }
    Object.defineProperty(TIpi.prototype, "CNPJProd", {
        get: function () {
            return this._CNPJProd;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TCnpj(value);
            this._CNPJProd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TIpi.prototype, "cSelo", {
        get: function () {
            return this._cSelo;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "60" });
            this._cSelo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TIpi.prototype, "qSelo", {
        get: function () {
            return this._qSelo;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{1,12}" });
            this._qSelo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TIpi.prototype, "cEnq", {
        get: function () {
            return this._cEnq;
        },
        set: function (value) {
            Model_1.validate(value, { "minLength": "1", "maxLength": "3" });
            this._cEnq = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TIpi.prototype, "IPITrib", {
        get: function () {
            return this._IPITrib;
        },
        set: function (value) {
            this._IPITrib = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TIpi.prototype, "IPINT", {
        get: function () {
            return this._IPINT;
        },
        set: function (value) {
            this._IPINT = value;
        },
        enumerable: true,
        configurable: true
    });
    return TIpi;
}());
exports.TIpi = TIpi;
var TIpi_IPITrib = /** @class */ (function () {
    function TIpi_IPITrib() {
    }
    Object.defineProperty(TIpi_IPITrib.prototype, "CST", {
        get: function () {
            return this._CST;
        },
        set: function (value) {
            Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["00", "49", "50", "99"] });
            this._CST = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TIpi_IPITrib.prototype, "vBC", {
        get: function () {
            return this._vBC;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vBC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TIpi_IPITrib.prototype, "pIPI", {
        get: function () {
            return this._pIPI;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_0302a04(value);
            this._pIPI = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TIpi_IPITrib.prototype, "qUnid", {
        get: function () {
            return this._qUnid;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1204v(value);
            this._qUnid = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TIpi_IPITrib.prototype, "vUnid", {
        get: function () {
            return this._vUnid;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1104(value);
            this._vUnid = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TIpi_IPITrib.prototype, "vIPI", {
        get: function () {
            return this._vIPI;
        },
        set: function (value) {
            TiposBasicoV400Xsd_1.TDec_1302(value);
            this._vIPI = value;
        },
        enumerable: true,
        configurable: true
    });
    return TIpi_IPITrib;
}());
exports.TIpi_IPITrib = TIpi_IPITrib;
var TIpi_IPINT = /** @class */ (function () {
    function TIpi_IPINT() {
    }
    Object.defineProperty(TIpi_IPINT.prototype, "CST", {
        get: function () {
            return this._CST;
        },
        set: function (value) {
            Model_1.validate(value, {
                "whiteSpace": "preserve",
                "enumeration": ["01", "02", "03", "04", "05", "51", "52", "53", "54", "55"]
            });
            this._CST = value;
        },
        enumerable: true,
        configurable: true
    });
    return TIpi_IPINT;
}());
exports.TIpi_IPINT = TIpi_IPINT;
