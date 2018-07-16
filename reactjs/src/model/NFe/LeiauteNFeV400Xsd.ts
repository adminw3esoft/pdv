import {
    TCodUfIBGE,
    TMod,
    TSerie,
    TNF,
    TDateTimeUTC,
    TCodMunIBGE,
    TAmb,
    TChNFe,
    TCnpj,
    TCpf,
    TIeDest,
    TIe,
    TIeST,
    TUfEmi,
    TData,
    TDec_1302,
    TIeDestNaoIsento,
    TDec_1104v,
    TDec_1110v,
    TDec_1302Opc,
    TDec_0803v,
    TDec_0302a04Max100,
    TDec_1204temperatura,
    TUf,
    TDec_1204v,
    TDec_1104,
    TDec_1203,
    TDec_0302a04,
    TDec_0302a04Opc,
    TDec_1204,
    TDec_0302Max100,
    TVerAplic,
    TProt,
    TStat,
    TMotivo,
    TRec,
    TMed,
    TCnpjOpc
} from "./TiposBasicoV400Xsd";
import {validate} from "../../Model" ;
/* --------
  This is a generated file. All edits will be overwritten!
-------- */

export const Torig = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "5", "6", "7", "8"]});
}
export const TFinNFe = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "enumeration": ["1", "2", "3", "4"]});
}
export const TProcEmi = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3"]});
}
export const TCListServ = function (value: any) {
    validate(value, {
        "whiteSpace": "preserve",
        "enumeration": ["01.01", "01.02", "01.03", "01.04", "01.05", "01.06", "01.07", "01.08", "02.01", "03.02", "03.03", "03.04", "03.05", "04.01", "04.02", "04.03", "04.04", "04.05", "04.06", "04.07", "04.08", "04.09", "04.10", "04.11", "04.12", "04.13", "04.14", "04.15", "04.16", "04.17", "04.18", "04.19", "04.20", "04.21", "04.22", "04.23", "05.01", "05.02", "05.03", "05.04", "05.05", "05.06", "05.07", "05.08", "05.09", "06.01", "06.02", "06.03", "06.04", "06.05", "07.01", "07.02", "07.03", "07.04", "07.05", "07.06", "07.07", "07.08", "07.09", "07.10", "07.11", "07.12", "07.13", "07.16", "07.17", "07.18", "07.19", "07.20", "07.21", "07.22", "08.01", "08.02", "09.01", "09.02", "09.03", "10.01", "10.02", "10.03", "10.04", "10.05", "10.06", "10.07", "10.08", "10.09", "10.10", "11.01", "11.02", "11.03", "11.04", "12.01", "12.02", "12.03", "12.04", "12.05", "12.06", "12.07", "12.08", "12.09", "12.10", "12.11", "12.12", "12.13", "12.14", "12.15", "12.16", "12.17", "13.02", "13.03", "13.04", "13.05", "14.01", "14.02", "14.03", "14.04", "14.05", "14.06", "14.07", "14.08", "14.09", "14.10", "14.11", "14.12", "14.13", "15.01", "15.02", "15.03", "15.04", "15.05", "15.06", "15.07", "15.08", "15.09", "15.10", "15.11", "15.12", "15.13", "15.14", "15.15", "15.16", "15.17", "15.18", "16.01", "17.01", "17.02", "17.03", "17.04", "17.05", "17.06", "17.08", "17.09", "17.10", "17.11", "17.12", "17.13", "17.14", "17.15", "17.16", "17.17", "17.18", "17.19", "17.20", "17.21", "17.22", "17.23", "17.24", "17.25", "18.01", "19.01", "20.01", "20.02", "20.03", "21.01", "22.01", "23.01", "24.01", "25.01", "25.02", "25.03", "25.04", "26.01", "27.01", "28.01", "29.01", "30.01", "31.01", "32.01", "33.01", "34.01", "35.01", "36.01", "37.01", "38.01", "39.01", "40.01"]
    });
}
export const TIdLote = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{1,15}"});
}
export const TVerNFe = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "pattern": "4\\.00"});
}
export const TGuid = function (value: any) {
    validate(value, {
        "whiteSpace": "preserve",
        "pattern": "[A-F0-9]{8}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{12}"
    });
}

export class TNFe {
    _infNFe;
    get infNFe() {
        return this._infNFe;
    }

    set infNFe(value: TNFe_InfNFe) {
        this._infNFe = value
    }

    _infNFeSupl;
    get infNFeSupl() {
        return this._infNFeSupl;
    }

    set infNFeSupl(value: TNFe_InfNFeSupl) {
        this._infNFeSupl = value
    }

    _undefined;
    get undefined() {
        return this._undefined;
    }

    set undefined(value: any) {
        undefined
    }
}

export class TNFe_InfNFe {
    _ide;
    get ide() {
        return this._ide;
    }

    set ide(value: TNFe_InfNFe_Ide) {
        this._ide = value
    }

    _emit;
    get emit() {
        return this._emit;
    }

    set emit(value: TNFe_InfNFe_Emit) {
        this._emit = value
    }

    _avulsa;
    get avulsa() {
        return this._avulsa;
    }

    set avulsa(value: TNFe_InfNFe_Avulsa) {
        this._avulsa = value
    }

    _dest;
    get dest() {
        return this._dest;
    }

    set dest(value: TNFe_InfNFe_Dest) {
        this._dest = value
    }

    _retirada;
    get retirada() {
        return this._retirada;
    }

    set retirada(value: any) {
        undefined
    }

    _entrega;
    get entrega() {
        return this._entrega;
    }

    set entrega(value: any) {
        undefined
    }

    _autXML;
    get autXML() {
        return this._autXML;
    }

    set autXML(value: TNFe_InfNFe_AutXML) {
        this._autXML = value
    }

    _det;
    get det() {
        return this._det;
    }

    set det(value: TNFe_InfNFe_Det) {
        this._det = value
    }

    _total;
    get total() {
        return this._total;
    }

    set total(value: TNFe_InfNFe_Total) {
        this._total = value
    }

    _transp;
    get transp() {
        return this._transp;
    }

    set transp(value: TNFe_InfNFe_Transp) {
        this._transp = value
    }

    _cobr;
    get cobr() {
        return this._cobr;
    }

    set cobr(value: TNFe_InfNFe_Cobr) {
        this._cobr = value
    }

    _pag;
    get pag() {
        return this._pag;
    }

    set pag(value: TNFe_InfNFe_Pag) {
        this._pag = value
    }

    _infAdic;
    get infAdic() {
        return this._infAdic;
    }

    set infAdic(value: TNFe_InfNFe_InfAdic) {
        this._infAdic = value
    }

    _exporta;
    get exporta() {
        return this._exporta;
    }

    set exporta(value: TNFe_InfNFe_Exporta) {
        this._exporta = value
    }

    _compra;
    get compra() {
        return this._compra;
    }

    set compra(value: TNFe_InfNFe_Compra) {
        this._compra = value
    }

    _cana;
    get cana() {
        return this._cana;
    }

    set cana(value: TNFe_InfNFe_Cana) {
        this._cana = value
    }

    _versao;
    get versao() {
        return this._versao;
    }

    set versao(value: any) {
        undefined
    }

    _Id;
    get Id() {
        return this._Id;
    }

    set Id(value: any) {
        validate(value, {"pattern": "NFe[0-9]{44}"});
        this._Id = value
    }
}

export class TNFe_InfNFe_Ide {
    _cUF;
    get cUF() {
        return this._cUF;
    }

    set cUF(value: any) {
        TCodUfIBGE(value);
        this._cUF = value
    }

    _cNF;
    get cNF() {
        return this._cNF;
    }

    set cNF(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{8}"});
        this._cNF = value
    }

    _natOp;
    get natOp() {
        return this._natOp;
    }

    set natOp(value: any) {
        validate(value, {"minLength": "1", "maxLength": "60"});
        this._natOp = value
    }

    _mod;
    get mod() {
        return this._mod;
    }

    set mod(value: any) {
        TMod(value);
        this._mod = value
    }

    _serie;
    get serie() {
        return this._serie;
    }

    set serie(value: any) {
        TSerie(value);
        this._serie = value
    }

    _nNF;
    get nNF() {
        return this._nNF;
    }

    set nNF(value: any) {
        TNF(value);
        this._nNF = value
    }

    _dhEmi;
    get dhEmi() {
        return this._dhEmi;
    }

    set dhEmi(value: any) {
        TDateTimeUTC(value);
        this._dhEmi = value
    }

    _dhSaiEnt;
    get dhSaiEnt() {
        return this._dhSaiEnt;
    }

    set dhSaiEnt(value: any) {
        TDateTimeUTC(value);
        this._dhSaiEnt = value
    }

    _tpNF;
    get tpNF() {
        return this._tpNF;
    }

    set tpNF(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1"]});
        this._tpNF = value
    }

    _idDest;
    get idDest() {
        return this._idDest;
    }

    set idDest(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["1", "2", "3"]});
        this._idDest = value
    }

    _cMunFG;
    get cMunFG() {
        return this._cMunFG;
    }

    set cMunFG(value: any) {
        TCodMunIBGE(value);
        this._cMunFG = value
    }

    _tpImp;
    get tpImp() {
        return this._tpImp;
    }

    set tpImp(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "5"]});
        this._tpImp = value
    }

    _tpEmis;
    get tpEmis() {
        return this._tpEmis;
    }

    set tpEmis(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["1", "2", "3", "4", "5", "6", "7", "9"]});
        this._tpEmis = value
    }

    _cDV;
    get cDV() {
        return this._cDV;
    }

    set cDV(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{1}"});
        this._cDV = value
    }

    _tpAmb;
    get tpAmb() {
        return this._tpAmb;
    }

    set tpAmb(value: any) {
        TAmb(value);
        this._tpAmb = value
    }

    _finNFe;
    get finNFe() {
        return this._finNFe;
    }

    set finNFe(value: any) {
        TFinNFe(value);
        this._finNFe = value
    }

    _indFinal;
    get indFinal() {
        return this._indFinal;
    }

    set indFinal(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1"]});
        this._indFinal = value
    }

    _indPres;
    get indPres() {
        return this._indPres;
    }

    set indPres(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "5", "9"]});
        this._indPres = value
    }

    _procEmi;
    get procEmi() {
        return this._procEmi;
    }

    set procEmi(value: any) {
        TProcEmi(value);
        this._procEmi = value
    }

    _verProc;
    get verProc() {
        return this._verProc;
    }

    set verProc(value: any) {
        validate(value, {"minLength": "1", "maxLength": "20"});
        this._verProc = value
    }

    _dhCont;
    get dhCont() {
        return this._dhCont;
    }

    set dhCont(value: any) {
        TDateTimeUTC(value);
        this._dhCont = value
    }

    _xJust;
    get xJust() {
        return this._xJust;
    }

    set xJust(value: any) {
        validate(value, {"minLength": "15", "maxLength": "256"});
        this._xJust = value
    }

    _NFref;
    get NFref() {
        return this._NFref;
    }

    set NFref(value: TNFe_InfNFe_Ide_NFref) {
        this._NFref = value
    }
}

export class TNFe_InfNFe_Ide_NFref {
    _refNFe;
    get refNFe() {
        return this._refNFe;
    }

    set refNFe(value: any) {
        TChNFe(value);
        this._refNFe = value
    }

    _refNF;
    get refNF() {
        return this._refNF;
    }

    set refNF(value: TNFe_InfNFe_Ide_NFref_RefNF) {
        this._refNF = value
    }

    _refNFP;
    get refNFP() {
        return this._refNFP;
    }

    set refNFP(value: TNFe_InfNFe_Ide_NFref_RefNFP) {
        this._refNFP = value
    }

    _refCTe;
    get refCTe() {
        return this._refCTe;
    }

    set refCTe(value: any) {
        TChNFe(value);
        this._refCTe = value
    }

    _refECF;
    get refECF() {
        return this._refECF;
    }

    set refECF(value: TNFe_InfNFe_Ide_NFref_RefECF) {
        this._refECF = value
    }
}

export class TNFe_InfNFe_Ide_NFref_RefNF {
    _cUF;
    get cUF() {
        return this._cUF;
    }

    set cUF(value: any) {
        TCodUfIBGE(value);
        this._cUF = value
    }

    _AAMM;
    get AAMM() {
        return this._AAMM;
    }

    set AAMM(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{2}[0]{1}[1-9]{1}|[0-9]{2}[1]{1}[0-2]{1}"});
        this._AAMM = value
    }

    _CNPJ;
    get CNPJ() {
        return this._CNPJ;
    }

    set CNPJ(value: any) {
        TCnpj(value);
        this._CNPJ = value
    }

    _mod;
    get mod() {
        return this._mod;
    }

    set mod(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["01", "02"]});
        this._mod = value
    }

    _serie;
    get serie() {
        return this._serie;
    }

    set serie(value: any) {
        TSerie(value);
        this._serie = value
    }

    _nNF;
    get nNF() {
        return this._nNF;
    }

    set nNF(value: any) {
        TNF(value);
        this._nNF = value
    }
}

export class TNFe_InfNFe_Ide_NFref_RefNFP {
    _cUF;
    get cUF() {
        return this._cUF;
    }

    set cUF(value: any) {
        TCodUfIBGE(value);
        this._cUF = value
    }

    _AAMM;
    get AAMM() {
        return this._AAMM;
    }

    set AAMM(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{2}[0]{1}[1-9]{1}|[0-9]{2}[1]{1}[0-2]{1}"});
        this._AAMM = value
    }

    _CNPJ;
    get CNPJ() {
        return this._CNPJ;
    }

    set CNPJ(value: any) {
        TCnpj(value);
        this._CNPJ = value
    }

    _CPF;
    get CPF() {
        return this._CPF;
    }

    set CPF(value: any) {
        TCpf(value);
        this._CPF = value
    }

    _IE;
    get IE() {
        return this._IE;
    }

    set IE(value: any) {
        TIeDest(value);
        this._IE = value
    }

    _mod;
    get mod() {
        return this._mod;
    }

    set mod(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["01", "04"]});
        this._mod = value
    }

    _serie;
    get serie() {
        return this._serie;
    }

    set serie(value: any) {
        TSerie(value);
        this._serie = value
    }

    _nNF;
    get nNF() {
        return this._nNF;
    }

    set nNF(value: any) {
        TNF(value);
        this._nNF = value
    }
}

export class TNFe_InfNFe_Ide_NFref_RefECF {
    _mod;
    get mod() {
        return this._mod;
    }

    set mod(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["2B", "2C", "2D"]});
        this._mod = value
    }

    _nECF;
    get nECF() {
        return this._nECF;
    }

    set nECF(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{1,3}"});
        this._nECF = value
    }

    _nCOO;
    get nCOO() {
        return this._nCOO;
    }

    set nCOO(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{1,6}"});
        this._nCOO = value
    }
}

export class TNFe_InfNFe_Emit {
    _CNPJ;
    get CNPJ() {
        return this._CNPJ;
    }

    set CNPJ(value: any) {
        TCnpj(value);
        this._CNPJ = value
    }

    _CPF;
    get CPF() {
        return this._CPF;
    }

    set CPF(value: any) {
        TCpf(value);
        this._CPF = value
    }

    _xNome;
    get xNome() {
        return this._xNome;
    }

    set xNome(value: any) {
        validate(value, {"maxLength": "60", "minLength": "2"});
        this._xNome = value
    }

    _xFant;
    get xFant() {
        return this._xFant;
    }

    set xFant(value: any) {
        validate(value, {"maxLength": "60", "minLength": "1"});
        this._xFant = value
    }

    _enderEmit;
    get enderEmit() {
        return this._enderEmit;
    }

    set enderEmit(value: any) {
        undefined
    }

    _IE;
    get IE() {
        return this._IE;
    }

    set IE(value: any) {
        TIe(value);
        this._IE = value
    }

    _IEST;
    get IEST() {
        return this._IEST;
    }

    set IEST(value: any) {
        TIeST(value);
        this._IEST = value
    }

    _IM;
    get IM() {
        return this._IM;
    }

    set IM(value: any) {
        validate(value, {"minLength": "1", "maxLength": "15"});
        this._IM = value
    }

    _CNAE;
    get CNAE() {
        return this._CNAE;
    }

    set CNAE(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{7}"});
        this._CNAE = value
    }

    _CRT;
    get CRT() {
        return this._CRT;
    }

    set CRT(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["1", "2", "3"]});
        this._CRT = value
    }
}

export class TNFe_InfNFe_Avulsa {
    _CNPJ;
    get CNPJ() {
        return this._CNPJ;
    }

    set CNPJ(value: any) {
        TCnpj(value);
        this._CNPJ = value
    }

    _xOrgao;
    get xOrgao() {
        return this._xOrgao;
    }

    set xOrgao(value: any) {
        validate(value, {"maxLength": "60", "minLength": "1"});
        this._xOrgao = value
    }

    _matr;
    get matr() {
        return this._matr;
    }

    set matr(value: any) {
        validate(value, {"minLength": "1", "maxLength": "60"});
        this._matr = value
    }

    _xAgente;
    get xAgente() {
        return this._xAgente;
    }

    set xAgente(value: any) {
        validate(value, {"maxLength": "60", "minLength": "1"});
        this._xAgente = value
    }

    _fone;
    get fone() {
        return this._fone;
    }

    set fone(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{6,14}"});
        this._fone = value
    }

    _UF;
    get UF() {
        return this._UF;
    }

    set UF(value: any) {
        TUfEmi(value);
        this._UF = value
    }

    _nDAR;
    get nDAR() {
        return this._nDAR;
    }

    set nDAR(value: any) {
        validate(value, {"minLength": "1", "maxLength": "60"});
        this._nDAR = value
    }

    _dEmi;
    get dEmi() {
        return this._dEmi;
    }

    set dEmi(value: any) {
        TData(value);
        this._dEmi = value
    }

    _vDAR;
    get vDAR() {
        return this._vDAR;
    }

    set vDAR(value: any) {
        TDec_1302(value);
        this._vDAR = value
    }

    _repEmi;
    get repEmi() {
        return this._repEmi;
    }

    set repEmi(value: any) {
        validate(value, {"minLength": "1", "maxLength": "60"});
        this._repEmi = value
    }

    _dPag;
    get dPag() {
        return this._dPag;
    }

    set dPag(value: any) {
        TData(value);
        this._dPag = value
    }
}

export class TNFe_InfNFe_Dest {
    _CNPJ;
    get CNPJ() {
        return this._CNPJ;
    }

    set CNPJ(value: any) {
        TCnpj(value);
        this._CNPJ = value
    }

    _CPF;
    get CPF() {
        return this._CPF;
    }

    set CPF(value: any) {
        TCpf(value);
        this._CPF = value
    }

    _idEstrangeiro;
    get idEstrangeiro() {
        return this._idEstrangeiro;
    }

    set idEstrangeiro(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "([!-ÿ]{0}|[!-ÿ]{5,20})?"});
        this._idEstrangeiro = value
    }

    _xNome;
    get xNome() {
        return this._xNome;
    }

    set xNome(value: any) {
        validate(value, {"maxLength": "60", "minLength": "2"});
        this._xNome = value
    }

    _enderDest;
    get enderDest() {
        return this._enderDest;
    }

    set enderDest(value: any) {
        undefined
    }

    _indIEDest;
    get indIEDest() {
        return this._indIEDest;
    }

    set indIEDest(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["1", "2", "9"]});
        this._indIEDest = value
    }

    _IE;
    get IE() {
        return this._IE;
    }

    set IE(value: any) {
        TIeDestNaoIsento(value);
        this._IE = value
    }

    _ISUF;
    get ISUF() {
        return this._ISUF;
    }

    set ISUF(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{8,9}"});
        this._ISUF = value
    }

    _IM;
    get IM() {
        return this._IM;
    }

    set IM(value: any) {
        validate(value, {"minLength": "1", "maxLength": "15"});
        this._IM = value
    }

    _email;
    get email() {
        return this._email;
    }

    set email(value: any) {
        validate(value, {"whiteSpace": "preserve", "minLength": "1", "maxLength": "60"});
        this._email = value
    }
}

export class TNFe_InfNFe_AutXML {
    _CNPJ;
    get CNPJ() {
        return this._CNPJ;
    }

    set CNPJ(value: any) {
        TCnpj(value);
        this._CNPJ = value
    }

    _CPF;
    get CPF() {
        return this._CPF;
    }

    set CPF(value: any) {
        TCpf(value);
        this._CPF = value
    }
}

export class TNFe_InfNFe_Det {
    _prod;
    get prod() {
        return this._prod;
    }

    set prod(value: TNFe_InfNFe_Det_Prod) {
        this._prod = value
    }

    _imposto;
    get imposto() {
        return this._imposto;
    }

    set imposto(value: TNFe_InfNFe_Det_Imposto) {
        this._imposto = value
    }

    _impostoDevol;
    get impostoDevol() {
        return this._impostoDevol;
    }

    set impostoDevol(value: TNFe_InfNFe_Det_ImpostoDevol) {
        this._impostoDevol = value
    }

    _infAdProd;
    get infAdProd() {
        return this._infAdProd;
    }

    set infAdProd(value: any) {
        validate(value, {"minLength": "1", "maxLength": "500"});
        this._infAdProd = value
    }

    _nItem;
    get nItem() {
        return this._nItem;
    }

    set nItem(value: any) {
        validate(value, {
            "whiteSpace": "preserve",
            "pattern": "[1-9]{1}[0-9]{0,1}|[1-8]{1}[0-9]{2}|[9]{1}[0-8]{1}[0-9]{1}|[9]{1}[9]{1}[0]{1}"
        });
        this._nItem = value
    }
}

export class TNFe_InfNFe_Det_Prod {
    _cProd;
    get cProd() {
        return this._cProd;
    }

    set cProd(value: any) {
        validate(value, {"maxLength": "60", "minLength": "1"});
        this._cProd = value
    }

    _cEAN;
    get cEAN() {
        return this._cEAN;
    }

    set cEAN(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "SEM GTIN|[0-9]{0}|[0-9]{8}|[0-9]{12,14}"});
        this._cEAN = value
    }

    _xProd;
    get xProd() {
        return this._xProd;
    }

    set xProd(value: any) {
        validate(value, {"maxLength": "120", "minLength": "1"});
        this._xProd = value
    }

    _NCM;
    get NCM() {
        return this._NCM;
    }

    set NCM(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{2}|[0-9]{8}"});
        this._NCM = value
    }

    _NVE;
    get NVE() {
        return this._NVE;
    }

    set NVE(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[A-Z]{2}[0-9]{4}"});
        this._NVE = value
    }

    _CEST;
    get CEST() {
        return this._CEST;
    }

    set CEST(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{7}"});
        this._CEST = value
    }

    _indEscala;
    get indEscala() {
        return this._indEscala;
    }

    set indEscala(value: any) {
        validate(value, {"enumeration": ["S", "N"]});
        this._indEscala = value
    }

    _CNPJFab;
    get CNPJFab() {
        return this._CNPJFab;
    }

    set CNPJFab(value: any) {
        TCnpj(value);
        this._CNPJFab = value
    }

    _cBenef;
    get cBenef() {
        return this._cBenef;
    }

    set cBenef(value: any) {
        validate(value, {});
        this._cBenef = value
    }

    _EXTIPI;
    get EXTIPI() {
        return this._EXTIPI;
    }

    set EXTIPI(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{2,3}"});
        this._EXTIPI = value
    }

    _CFOP;
    get CFOP() {
        return this._CFOP;
    }

    set CFOP(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[1,2,3,5,6,7]{1}[0-9]{3}"});
        this._CFOP = value
    }

    _uCom;
    get uCom() {
        return this._uCom;
    }

    set uCom(value: any) {
        validate(value, {"maxLength": "6", "minLength": "1"});
        this._uCom = value
    }

    _qCom;
    get qCom() {
        return this._qCom;
    }

    set qCom(value: any) {
        TDec_1104v(value);
        this._qCom = value
    }

    _vUnCom;
    get vUnCom() {
        return this._vUnCom;
    }

    set vUnCom(value: any) {
        TDec_1110v(value);
        this._vUnCom = value
    }

    _vProd;
    get vProd() {
        return this._vProd;
    }

    set vProd(value: any) {
        TDec_1302(value);
        this._vProd = value
    }

    _cEANTrib;
    get cEANTrib() {
        return this._cEANTrib;
    }

    set cEANTrib(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "SEM GTIN|[0-9]{0}|[0-9]{8}|[0-9]{12,14}"});
        this._cEANTrib = value
    }

    _uTrib;
    get uTrib() {
        return this._uTrib;
    }

    set uTrib(value: any) {
        validate(value, {"maxLength": "6", "minLength": "1"});
        this._uTrib = value
    }

    _qTrib;
    get qTrib() {
        return this._qTrib;
    }

    set qTrib(value: any) {
        TDec_1104v(value);
        this._qTrib = value
    }

    _vUnTrib;
    get vUnTrib() {
        return this._vUnTrib;
    }

    set vUnTrib(value: any) {
        TDec_1110v(value);
        this._vUnTrib = value
    }

    _vFrete;
    get vFrete() {
        return this._vFrete;
    }

    set vFrete(value: any) {
        TDec_1302Opc(value);
        this._vFrete = value
    }

    _vSeg;
    get vSeg() {
        return this._vSeg;
    }

    set vSeg(value: any) {
        TDec_1302Opc(value);
        this._vSeg = value
    }

    _vDesc;
    get vDesc() {
        return this._vDesc;
    }

    set vDesc(value: any) {
        TDec_1302Opc(value);
        this._vDesc = value
    }

    _vOutro;
    get vOutro() {
        return this._vOutro;
    }

    set vOutro(value: any) {
        TDec_1302Opc(value);
        this._vOutro = value
    }

    _indTot;
    get indTot() {
        return this._indTot;
    }

    set indTot(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1"]});
        this._indTot = value
    }

    _DI;
    get DI() {
        return this._DI;
    }

    set DI(value: TNFe_InfNFe_Det_Prod_DI) {
        this._DI = value
    }

    _detExport;
    get detExport() {
        return this._detExport;
    }

    set detExport(value: TNFe_InfNFe_Det_Prod_DetExport) {
        this._detExport = value
    }

    _xPed;
    get xPed() {
        return this._xPed;
    }

    set xPed(value: any) {
        validate(value, {"minLength": "1", "maxLength": "15"});
        this._xPed = value
    }

    _nItemPed;
    get nItemPed() {
        return this._nItemPed;
    }

    set nItemPed(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{1,6}"});
        this._nItemPed = value
    }

    _nFCI;
    get nFCI() {
        return this._nFCI;
    }

    set nFCI(value: any) {
        TGuid(value);
        this._nFCI = value
    }

    _rastro;
    get rastro() {
        return this._rastro;
    }

    set rastro(value: TNFe_InfNFe_Det_Prod_Rastro) {
        this._rastro = value
    }

    _veicProd;
    get veicProd() {
        return this._veicProd;
    }

    set veicProd(value: TNFe_InfNFe_Det_Prod_VeicProd) {
        this._veicProd = value
    }

    _med;
    get med() {
        return this._med;
    }

    set med(value: TNFe_InfNFe_Det_Prod_Med) {
        this._med = value
    }

    _arma;
    get arma() {
        return this._arma;
    }

    set arma(value: TNFe_InfNFe_Det_Prod_Arma) {
        this._arma = value
    }

    _comb;
    get comb() {
        return this._comb;
    }

    set comb(value: TNFe_InfNFe_Det_Prod_Comb) {
        this._comb = value
    }

    _nRECOPI;
    get nRECOPI() {
        return this._nRECOPI;
    }

    set nRECOPI(value: any) {
        validate(value, {"whiteSpace": "preserve", "maxLength": "20", "pattern": "[0-9]{20}"});
        this._nRECOPI = value
    }
}

export class TNFe_InfNFe_Det_Prod_DI {
    _nDI;
    get nDI() {
        return this._nDI;
    }

    set nDI(value: any) {
        validate(value, {"minLength": "1", "maxLength": "12"});
        this._nDI = value
    }

    _dDI;
    get dDI() {
        return this._dDI;
    }

    set dDI(value: any) {
        TData(value);
        this._dDI = value
    }

    _xLocDesemb;
    get xLocDesemb() {
        return this._xLocDesemb;
    }

    set xLocDesemb(value: any) {
        validate(value, {"minLength": "1", "maxLength": "60"});
        this._xLocDesemb = value
    }

    _UFDesemb;
    get UFDesemb() {
        return this._UFDesemb;
    }

    set UFDesemb(value: any) {
        TUfEmi(value);
        this._UFDesemb = value
    }

    _dDesemb;
    get dDesemb() {
        return this._dDesemb;
    }

    set dDesemb(value: any) {
        TData(value);
        this._dDesemb = value
    }

    _tpViaTransp;
    get tpViaTransp() {
        return this._tpViaTransp;
    }

    set tpViaTransp(value: any) {
        validate(value, {
            "whiteSpace": "preserve",
            "enumeration": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
        });
        this._tpViaTransp = value
    }

    _vAFRMM;
    get vAFRMM() {
        return this._vAFRMM;
    }

    set vAFRMM(value: any) {
        TDec_1302(value);
        this._vAFRMM = value
    }

    _tpIntermedio;
    get tpIntermedio() {
        return this._tpIntermedio;
    }

    set tpIntermedio(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["1", "2", "3"]});
        this._tpIntermedio = value
    }

    _CNPJ;
    get CNPJ() {
        return this._CNPJ;
    }

    set CNPJ(value: any) {
        TCnpj(value);
        this._CNPJ = value
    }

    _UFTerceiro;
    get UFTerceiro() {
        return this._UFTerceiro;
    }

    set UFTerceiro(value: any) {
        TUfEmi(value);
        this._UFTerceiro = value
    }

    _cExportador;
    get cExportador() {
        return this._cExportador;
    }

    set cExportador(value: any) {
        validate(value, {"minLength": "1", "maxLength": "60"});
        this._cExportador = value
    }

    _adi;
    get adi() {
        return this._adi;
    }

    set adi(value: TNFe_InfNFe_Det_Prod_DI_Adi) {
        this._adi = value
    }
}

export class TNFe_InfNFe_Det_Prod_DI_Adi {
    _nAdicao;
    get nAdicao() {
        return this._nAdicao;
    }

    set nAdicao(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[1-9]{1}[0-9]{0,2}"});
        this._nAdicao = value
    }

    _nSeqAdic;
    get nSeqAdic() {
        return this._nSeqAdic;
    }

    set nSeqAdic(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[1-9]{1}[0-9]{0,2}"});
        this._nSeqAdic = value
    }

    _cFabricante;
    get cFabricante() {
        return this._cFabricante;
    }

    set cFabricante(value: any) {
        validate(value, {"minLength": "1", "maxLength": "60"});
        this._cFabricante = value
    }

    _vDescDI;
    get vDescDI() {
        return this._vDescDI;
    }

    set vDescDI(value: any) {
        TDec_1302Opc(value);
        this._vDescDI = value
    }

    _nDraw;
    get nDraw() {
        return this._nDraw;
    }

    set nDraw(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{0,11}"});
        this._nDraw = value
    }
}

export class TNFe_InfNFe_Det_Prod_DetExport {
    _nDraw;
    get nDraw() {
        return this._nDraw;
    }

    set nDraw(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{0,11}"});
        this._nDraw = value
    }

    _exportInd;
    get exportInd() {
        return this._exportInd;
    }

    set exportInd(value: TNFe_InfNFe_Det_Prod_DetExport_ExportInd) {
        this._exportInd = value
    }
}

export class TNFe_InfNFe_Det_Prod_DetExport_ExportInd {
    _nRE;
    get nRE() {
        return this._nRE;
    }

    set nRE(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{0,12}"});
        this._nRE = value
    }

    _chNFe;
    get chNFe() {
        return this._chNFe;
    }

    set chNFe(value: any) {
        TChNFe(value);
        this._chNFe = value
    }

    _qExport;
    get qExport() {
        return this._qExport;
    }

    set qExport(value: any) {
        TDec_1104v(value);
        this._qExport = value
    }
}

export class TNFe_InfNFe_Det_Prod_Rastro {
    _nLote;
    get nLote() {
        return this._nLote;
    }

    set nLote(value: any) {
        validate(value, {"minLength": "1", "maxLength": "20"});
        this._nLote = value
    }

    _qLote;
    get qLote() {
        return this._qLote;
    }

    set qLote(value: any) {
        TDec_0803v(value);
        this._qLote = value
    }

    _dFab;
    get dFab() {
        return this._dFab;
    }

    set dFab(value: any) {
        TData(value);
        this._dFab = value
    }

    _dVal;
    get dVal() {
        return this._dVal;
    }

    set dVal(value: any) {
        TData(value);
        this._dVal = value
    }

    _cAgreg;
    get cAgreg() {
        return this._cAgreg;
    }

    set cAgreg(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{1,20}"});
        this._cAgreg = value
    }
}

export class TNFe_InfNFe_Det_Prod_VeicProd {
    _tpOp;
    get tpOp() {
        return this._tpOp;
    }

    set tpOp(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3"]});
        this._tpOp = value
    }

    _chassi;
    get chassi() {
        return this._chassi;
    }

    set chassi(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[A-Z0-9]+"});
        this._chassi = value
    }

    _cCor;
    get cCor() {
        return this._cCor;
    }

    set cCor(value: any) {
        validate(value, {"minLength": "1", "maxLength": "4"});
        this._cCor = value
    }

    _xCor;
    get xCor() {
        return this._xCor;
    }

    set xCor(value: any) {
        validate(value, {"minLength": "1", "maxLength": "40"});
        this._xCor = value
    }

    _pot;
    get pot() {
        return this._pot;
    }

    set pot(value: any) {
        validate(value, {"minLength": "1", "maxLength": "4"});
        this._pot = value
    }

    _cilin;
    get cilin() {
        return this._cilin;
    }

    set cilin(value: any) {
        validate(value, {"minLength": "1", "maxLength": "4"});
        this._cilin = value
    }

    _pesoL;
    get pesoL() {
        return this._pesoL;
    }

    set pesoL(value: any) {
        validate(value, {"minLength": "1", "maxLength": "9"});
        this._pesoL = value
    }

    _pesoB;
    get pesoB() {
        return this._pesoB;
    }

    set pesoB(value: any) {
        validate(value, {"minLength": "1", "maxLength": "9"});
        this._pesoB = value
    }

    _nSerie;
    get nSerie() {
        return this._nSerie;
    }

    set nSerie(value: any) {
        validate(value, {"minLength": "1", "maxLength": "9"});
        this._nSerie = value
    }

    _tpComb;
    get tpComb() {
        return this._tpComb;
    }

    set tpComb(value: any) {
        validate(value, {"minLength": "1", "maxLength": "2"});
        this._tpComb = value
    }

    _nMotor;
    get nMotor() {
        return this._nMotor;
    }

    set nMotor(value: any) {
        validate(value, {"minLength": "1", "maxLength": "21"});
        this._nMotor = value
    }

    _CMT;
    get CMT() {
        return this._CMT;
    }

    set CMT(value: any) {
        validate(value, {"minLength": "1", "maxLength": "9"});
        this._CMT = value
    }

    _dist;
    get dist() {
        return this._dist;
    }

    set dist(value: any) {
        validate(value, {"minLength": "1", "maxLength": "4"});
        this._dist = value
    }

    _anoMod;
    get anoMod() {
        return this._anoMod;
    }

    set anoMod(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{4}"});
        this._anoMod = value
    }

    _anoFab;
    get anoFab() {
        return this._anoFab;
    }

    set anoFab(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{4}"});
        this._anoFab = value
    }

    _tpPint;
    get tpPint() {
        return this._tpPint;
    }

    set tpPint(value: any) {
        validate(value, {});
        this._tpPint = value
    }

    _tpVeic;
    get tpVeic() {
        return this._tpVeic;
    }

    set tpVeic(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{1,2}"});
        this._tpVeic = value
    }

    _espVeic;
    get espVeic() {
        return this._espVeic;
    }

    set espVeic(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{1}"});
        this._espVeic = value
    }

    _VIN;
    get VIN() {
        return this._VIN;
    }

    set VIN(value: any) {
        validate(value, {"enumeration": ["R", "N"]});
        this._VIN = value
    }

    _condVeic;
    get condVeic() {
        return this._condVeic;
    }

    set condVeic(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["1", "2", "3"]});
        this._condVeic = value
    }

    _cMod;
    get cMod() {
        return this._cMod;
    }

    set cMod(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{1,6}"});
        this._cMod = value
    }

    _cCorDENATRAN;
    get cCorDENATRAN() {
        return this._cCorDENATRAN;
    }

    set cCorDENATRAN(value: any) {
        validate(value, {"whiteSpace": "preserve", "minLength": "1", "maxLength": "2", "pattern": "[0-9]{1,2}"});
        this._cCorDENATRAN = value
    }

    _lota;
    get lota() {
        return this._lota;
    }

    set lota(value: any) {
        validate(value, {"minLength": "1", "maxLength": "3", "whiteSpace": "preserve", "pattern": "[0-9]{1,3}"});
        this._lota = value
    }

    _tpRest;
    get tpRest() {
        return this._tpRest;
    }

    set tpRest(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "9"]});
        this._tpRest = value
    }
}

export class TNFe_InfNFe_Det_Prod_Med {
    _cProdANVISA;
    get cProdANVISA() {
        return this._cProdANVISA;
    }

    set cProdANVISA(value: any) {
        validate(value, {});
        this._cProdANVISA = value
    }

    _vPMC;
    get vPMC() {
        return this._vPMC;
    }

    set vPMC(value: any) {
        TDec_1302(value);
        this._vPMC = value
    }
}

export class TNFe_InfNFe_Det_Prod_Arma {
    _tpArma;
    get tpArma() {
        return this._tpArma;
    }

    set tpArma(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1"]});
        this._tpArma = value
    }

    _nSerie;
    get nSerie() {
        return this._nSerie;
    }

    set nSerie(value: any) {
        validate(value, {"minLength": "1", "maxLength": "15"});
        this._nSerie = value
    }

    _nCano;
    get nCano() {
        return this._nCano;
    }

    set nCano(value: any) {
        validate(value, {"minLength": "1", "maxLength": "15"});
        this._nCano = value
    }

    _descr;
    get descr() {
        return this._descr;
    }

    set descr(value: any) {
        validate(value, {"minLength": "1", "maxLength": "256"});
        this._descr = value
    }
}

export class TNFe_InfNFe_Det_Prod_Comb {
    _cProdANP;
    get cProdANP() {
        return this._cProdANP;
    }

    set cProdANP(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{9}"});
        this._cProdANP = value
    }

    _descANP;
    get descANP() {
        return this._descANP;
    }

    set descANP(value: any) {
        validate(value, {"minLength": "2", "maxLength": "95"});
        this._descANP = value
    }

    _pGLP;
    get pGLP() {
        return this._pGLP;
    }

    set pGLP(value: any) {
        TDec_0302a04Max100(value);
        this._pGLP = value
    }

    _pGNn;
    get pGNn() {
        return this._pGNn;
    }

    set pGNn(value: any) {
        TDec_0302a04Max100(value);
        this._pGNn = value
    }

    _pGNi;
    get pGNi() {
        return this._pGNi;
    }

    set pGNi(value: any) {
        TDec_0302a04Max100(value);
        this._pGNi = value
    }

    _vPart;
    get vPart() {
        return this._vPart;
    }

    set vPart(value: any) {
        TDec_1302(value);
        this._vPart = value
    }

    _CODIF;
    get CODIF() {
        return this._CODIF;
    }

    set CODIF(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{1,21}"});
        this._CODIF = value
    }

    _qTemp;
    get qTemp() {
        return this._qTemp;
    }

    set qTemp(value: any) {
        TDec_1204temperatura(value);
        this._qTemp = value
    }

    _UFCons;
    get UFCons() {
        return this._UFCons;
    }

    set UFCons(value: any) {
        TUf(value);
        this._UFCons = value
    }

    _CIDE;
    get CIDE() {
        return this._CIDE;
    }

    set CIDE(value: TNFe_InfNFe_Det_Prod_Comb_CIDE) {
        this._CIDE = value
    }

    _encerrante;
    get encerrante() {
        return this._encerrante;
    }

    set encerrante(value: TNFe_InfNFe_Det_Prod_Comb_Encerrante) {
        this._encerrante = value
    }
}

export class TNFe_InfNFe_Det_Prod_Comb_CIDE {
    _qBCProd;
    get qBCProd() {
        return this._qBCProd;
    }

    set qBCProd(value: any) {
        TDec_1204v(value);
        this._qBCProd = value
    }

    _vAliqProd;
    get vAliqProd() {
        return this._vAliqProd;
    }

    set vAliqProd(value: any) {
        TDec_1104(value);
        this._vAliqProd = value
    }

    _vCIDE;
    get vCIDE() {
        return this._vCIDE;
    }

    set vCIDE(value: any) {
        TDec_1302(value);
        this._vCIDE = value
    }
}

export class TNFe_InfNFe_Det_Prod_Comb_Encerrante {
    _nBico;
    get nBico() {
        return this._nBico;
    }

    set nBico(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{1,3}"});
        this._nBico = value
    }

    _nBomba;
    get nBomba() {
        return this._nBomba;
    }

    set nBomba(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{1,3}"});
        this._nBomba = value
    }

    _nTanque;
    get nTanque() {
        return this._nTanque;
    }

    set nTanque(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{1,3}"});
        this._nTanque = value
    }

    _vEncIni;
    get vEncIni() {
        return this._vEncIni;
    }

    set vEncIni(value: any) {
        TDec_1203(value);
        this._vEncIni = value
    }

    _vEncFin;
    get vEncFin() {
        return this._vEncFin;
    }

    set vEncFin(value: any) {
        TDec_1203(value);
        this._vEncFin = value
    }
}

export class TNFe_InfNFe_Det_Imposto {
    _vTotTrib;
    get vTotTrib() {
        return this._vTotTrib;
    }

    set vTotTrib(value: any) {
        TDec_1302(value);
        this._vTotTrib = value
    }

    _ICMS;
    get ICMS() {
        return this._ICMS;
    }

    set ICMS(value: TNFe_InfNFe_Det_Imposto_ICMS) {
        this._ICMS = value
    }

    _IPI;
    get IPI() {
        return this._IPI;
    }

    set IPI(value: any) {
        undefined
    }

    _II;
    get II() {
        return this._II;
    }

    set II(value: TNFe_InfNFe_Det_Imposto_II) {
        this._II = value
    }

    _IPI;
    get IPI() {
        return this._IPI;
    }

    set IPI(value: any) {
        undefined
    }

    _ISSQN;
    get ISSQN() {
        return this._ISSQN;
    }

    set ISSQN(value: TNFe_InfNFe_Det_Imposto_ISSQN) {
        this._ISSQN = value
    }

    _PIS;
    get PIS() {
        return this._PIS;
    }

    set PIS(value: TNFe_InfNFe_Det_Imposto_PIS) {
        this._PIS = value
    }

    _PISST;
    get PISST() {
        return this._PISST;
    }

    set PISST(value: TNFe_InfNFe_Det_Imposto_PISST) {
        this._PISST = value
    }

    _COFINS;
    get COFINS() {
        return this._COFINS;
    }

    set COFINS(value: TNFe_InfNFe_Det_Imposto_COFINS) {
        this._COFINS = value
    }

    _COFINSST;
    get COFINSST() {
        return this._COFINSST;
    }

    set COFINSST(value: TNFe_InfNFe_Det_Imposto_COFINSST) {
        this._COFINSST = value
    }

    _ICMSUFDest;
    get ICMSUFDest() {
        return this._ICMSUFDest;
    }

    set ICMSUFDest(value: TNFe_InfNFe_Det_Imposto_ICMSUFDest) {
        this._ICMSUFDest = value
    }
}

export class TNFe_InfNFe_Det_Imposto_ICMS {
    _ICMS00;
    get ICMS00() {
        return this._ICMS00;
    }

    set ICMS00(value: TNFe_InfNFe_Det_Imposto_ICMS_ICMS00) {
        this._ICMS00 = value
    }

    _ICMS10;
    get ICMS10() {
        return this._ICMS10;
    }

    set ICMS10(value: TNFe_InfNFe_Det_Imposto_ICMS_ICMS10) {
        this._ICMS10 = value
    }

    _ICMS20;
    get ICMS20() {
        return this._ICMS20;
    }

    set ICMS20(value: TNFe_InfNFe_Det_Imposto_ICMS_ICMS20) {
        this._ICMS20 = value
    }

    _ICMS30;
    get ICMS30() {
        return this._ICMS30;
    }

    set ICMS30(value: TNFe_InfNFe_Det_Imposto_ICMS_ICMS30) {
        this._ICMS30 = value
    }

    _ICMS40;
    get ICMS40() {
        return this._ICMS40;
    }

    set ICMS40(value: TNFe_InfNFe_Det_Imposto_ICMS_ICMS40) {
        this._ICMS40 = value
    }

    _ICMS51;
    get ICMS51() {
        return this._ICMS51;
    }

    set ICMS51(value: TNFe_InfNFe_Det_Imposto_ICMS_ICMS51) {
        this._ICMS51 = value
    }

    _ICMS60;
    get ICMS60() {
        return this._ICMS60;
    }

    set ICMS60(value: TNFe_InfNFe_Det_Imposto_ICMS_ICMS60) {
        this._ICMS60 = value
    }

    _ICMS70;
    get ICMS70() {
        return this._ICMS70;
    }

    set ICMS70(value: TNFe_InfNFe_Det_Imposto_ICMS_ICMS70) {
        this._ICMS70 = value
    }

    _ICMS90;
    get ICMS90() {
        return this._ICMS90;
    }

    set ICMS90(value: TNFe_InfNFe_Det_Imposto_ICMS_ICMS90) {
        this._ICMS90 = value
    }

    _ICMSPart;
    get ICMSPart() {
        return this._ICMSPart;
    }

    set ICMSPart(value: TNFe_InfNFe_Det_Imposto_ICMS_ICMSPart) {
        this._ICMSPart = value
    }

    _ICMSST;
    get ICMSST() {
        return this._ICMSST;
    }

    set ICMSST(value: TNFe_InfNFe_Det_Imposto_ICMS_ICMSST) {
        this._ICMSST = value
    }

    _ICMSSN101;
    get ICMSSN101() {
        return this._ICMSSN101;
    }

    set ICMSSN101(value: TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN101) {
        this._ICMSSN101 = value
    }

    _ICMSSN102;
    get ICMSSN102() {
        return this._ICMSSN102;
    }

    set ICMSSN102(value: TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN102) {
        this._ICMSSN102 = value
    }

    _ICMSSN201;
    get ICMSSN201() {
        return this._ICMSSN201;
    }

    set ICMSSN201(value: TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN201) {
        this._ICMSSN201 = value
    }

    _ICMSSN202;
    get ICMSSN202() {
        return this._ICMSSN202;
    }

    set ICMSSN202(value: TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN202) {
        this._ICMSSN202 = value
    }

    _ICMSSN500;
    get ICMSSN500() {
        return this._ICMSSN500;
    }

    set ICMSSN500(value: TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN500) {
        this._ICMSSN500 = value
    }

    _ICMSSN900;
    get ICMSSN900() {
        return this._ICMSSN900;
    }

    set ICMSSN900(value: TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN900) {
        this._ICMSSN900 = value
    }
}

export class TNFe_InfNFe_Det_Imposto_ICMS_ICMS00 {
    _orig;
    get orig() {
        return this._orig;
    }

    set orig(value: any) {
        Torig(value);
        this._orig = value
    }

    _CST;
    get CST() {
        return this._CST;
    }

    set CST(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["00"]});
        this._CST = value
    }

    _modBC;
    get modBC() {
        return this._modBC;
    }

    set modBC(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3"]});
        this._modBC = value
    }

    _vBC;
    get vBC() {
        return this._vBC;
    }

    set vBC(value: any) {
        TDec_1302(value);
        this._vBC = value
    }

    _pICMS;
    get pICMS() {
        return this._pICMS;
    }

    set pICMS(value: any) {
        TDec_0302a04(value);
        this._pICMS = value
    }

    _vICMS;
    get vICMS() {
        return this._vICMS;
    }

    set vICMS(value: any) {
        TDec_1302(value);
        this._vICMS = value
    }

    _pFCP;
    get pFCP() {
        return this._pFCP;
    }

    set pFCP(value: any) {
        TDec_0302a04Opc(value);
        this._pFCP = value
    }

    _vFCP;
    get vFCP() {
        return this._vFCP;
    }

    set vFCP(value: any) {
        TDec_1302(value);
        this._vFCP = value
    }
}

export class TNFe_InfNFe_Det_Imposto_ICMS_ICMS10 {
    _orig;
    get orig() {
        return this._orig;
    }

    set orig(value: any) {
        Torig(value);
        this._orig = value
    }

    _CST;
    get CST() {
        return this._CST;
    }

    set CST(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["10"]});
        this._CST = value
    }

    _modBC;
    get modBC() {
        return this._modBC;
    }

    set modBC(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3"]});
        this._modBC = value
    }

    _vBC;
    get vBC() {
        return this._vBC;
    }

    set vBC(value: any) {
        TDec_1302(value);
        this._vBC = value
    }

    _pICMS;
    get pICMS() {
        return this._pICMS;
    }

    set pICMS(value: any) {
        TDec_0302a04(value);
        this._pICMS = value
    }

    _vICMS;
    get vICMS() {
        return this._vICMS;
    }

    set vICMS(value: any) {
        TDec_1302(value);
        this._vICMS = value
    }

    _vBCFCP;
    get vBCFCP() {
        return this._vBCFCP;
    }

    set vBCFCP(value: any) {
        TDec_1302(value);
        this._vBCFCP = value
    }

    _pFCP;
    get pFCP() {
        return this._pFCP;
    }

    set pFCP(value: any) {
        TDec_0302a04Opc(value);
        this._pFCP = value
    }

    _vFCP;
    get vFCP() {
        return this._vFCP;
    }

    set vFCP(value: any) {
        TDec_1302(value);
        this._vFCP = value
    }

    _modBCST;
    get modBCST() {
        return this._modBCST;
    }

    set modBCST(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "5"]});
        this._modBCST = value
    }

    _pMVAST;
    get pMVAST() {
        return this._pMVAST;
    }

    set pMVAST(value: any) {
        TDec_0302a04Opc(value);
        this._pMVAST = value
    }

    _pRedBCST;
    get pRedBCST() {
        return this._pRedBCST;
    }

    set pRedBCST(value: any) {
        TDec_0302a04Opc(value);
        this._pRedBCST = value
    }

    _vBCST;
    get vBCST() {
        return this._vBCST;
    }

    set vBCST(value: any) {
        TDec_1302(value);
        this._vBCST = value
    }

    _pICMSST;
    get pICMSST() {
        return this._pICMSST;
    }

    set pICMSST(value: any) {
        TDec_0302a04(value);
        this._pICMSST = value
    }

    _vICMSST;
    get vICMSST() {
        return this._vICMSST;
    }

    set vICMSST(value: any) {
        TDec_1302(value);
        this._vICMSST = value
    }

    _vBCFCPST;
    get vBCFCPST() {
        return this._vBCFCPST;
    }

    set vBCFCPST(value: any) {
        TDec_1302(value);
        this._vBCFCPST = value
    }

    _pFCPST;
    get pFCPST() {
        return this._pFCPST;
    }

    set pFCPST(value: any) {
        TDec_0302a04Opc(value);
        this._pFCPST = value
    }

    _vFCPST;
    get vFCPST() {
        return this._vFCPST;
    }

    set vFCPST(value: any) {
        TDec_1302(value);
        this._vFCPST = value
    }
}

export class TNFe_InfNFe_Det_Imposto_ICMS_ICMS20 {
    _orig;
    get orig() {
        return this._orig;
    }

    set orig(value: any) {
        Torig(value);
        this._orig = value
    }

    _CST;
    get CST() {
        return this._CST;
    }

    set CST(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["20"]});
        this._CST = value
    }

    _modBC;
    get modBC() {
        return this._modBC;
    }

    set modBC(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3"]});
        this._modBC = value
    }

    _pRedBC;
    get pRedBC() {
        return this._pRedBC;
    }

    set pRedBC(value: any) {
        TDec_0302a04(value);
        this._pRedBC = value
    }

    _vBC;
    get vBC() {
        return this._vBC;
    }

    set vBC(value: any) {
        TDec_1302(value);
        this._vBC = value
    }

    _pICMS;
    get pICMS() {
        return this._pICMS;
    }

    set pICMS(value: any) {
        TDec_0302a04(value);
        this._pICMS = value
    }

    _vICMS;
    get vICMS() {
        return this._vICMS;
    }

    set vICMS(value: any) {
        TDec_1302(value);
        this._vICMS = value
    }

    _vBCFCP;
    get vBCFCP() {
        return this._vBCFCP;
    }

    set vBCFCP(value: any) {
        TDec_1302(value);
        this._vBCFCP = value
    }

    _pFCP;
    get pFCP() {
        return this._pFCP;
    }

    set pFCP(value: any) {
        TDec_0302a04Opc(value);
        this._pFCP = value
    }

    _vFCP;
    get vFCP() {
        return this._vFCP;
    }

    set vFCP(value: any) {
        TDec_1302(value);
        this._vFCP = value
    }

    _vICMSDeson;
    get vICMSDeson() {
        return this._vICMSDeson;
    }

    set vICMSDeson(value: any) {
        TDec_1302(value);
        this._vICMSDeson = value
    }

    _motDesICMS;
    get motDesICMS() {
        return this._motDesICMS;
    }

    set motDesICMS(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["3", "9", "12"]});
        this._motDesICMS = value
    }
}

export class TNFe_InfNFe_Det_Imposto_ICMS_ICMS30 {
    _orig;
    get orig() {
        return this._orig;
    }

    set orig(value: any) {
        Torig(value);
        this._orig = value
    }

    _CST;
    get CST() {
        return this._CST;
    }

    set CST(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["30"]});
        this._CST = value
    }

    _modBCST;
    get modBCST() {
        return this._modBCST;
    }

    set modBCST(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "5"]});
        this._modBCST = value
    }

    _pMVAST;
    get pMVAST() {
        return this._pMVAST;
    }

    set pMVAST(value: any) {
        TDec_0302a04Opc(value);
        this._pMVAST = value
    }

    _pRedBCST;
    get pRedBCST() {
        return this._pRedBCST;
    }

    set pRedBCST(value: any) {
        TDec_0302a04Opc(value);
        this._pRedBCST = value
    }

    _vBCST;
    get vBCST() {
        return this._vBCST;
    }

    set vBCST(value: any) {
        TDec_1302(value);
        this._vBCST = value
    }

    _pICMSST;
    get pICMSST() {
        return this._pICMSST;
    }

    set pICMSST(value: any) {
        TDec_0302a04(value);
        this._pICMSST = value
    }

    _vICMSST;
    get vICMSST() {
        return this._vICMSST;
    }

    set vICMSST(value: any) {
        TDec_1302(value);
        this._vICMSST = value
    }

    _vBCFCPST;
    get vBCFCPST() {
        return this._vBCFCPST;
    }

    set vBCFCPST(value: any) {
        TDec_1302(value);
        this._vBCFCPST = value
    }

    _pFCPST;
    get pFCPST() {
        return this._pFCPST;
    }

    set pFCPST(value: any) {
        TDec_0302a04Opc(value);
        this._pFCPST = value
    }

    _vFCPST;
    get vFCPST() {
        return this._vFCPST;
    }

    set vFCPST(value: any) {
        TDec_1302(value);
        this._vFCPST = value
    }

    _vICMSDeson;
    get vICMSDeson() {
        return this._vICMSDeson;
    }

    set vICMSDeson(value: any) {
        TDec_1302(value);
        this._vICMSDeson = value
    }

    _motDesICMS;
    get motDesICMS() {
        return this._motDesICMS;
    }

    set motDesICMS(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["6", "7", "9"]});
        this._motDesICMS = value
    }
}

export class TNFe_InfNFe_Det_Imposto_ICMS_ICMS40 {
    _orig;
    get orig() {
        return this._orig;
    }

    set orig(value: any) {
        Torig(value);
        this._orig = value
    }

    _CST;
    get CST() {
        return this._CST;
    }

    set CST(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["40", "41", "50"]});
        this._CST = value
    }

    _vICMSDeson;
    get vICMSDeson() {
        return this._vICMSDeson;
    }

    set vICMSDeson(value: any) {
        TDec_1302(value);
        this._vICMSDeson = value
    }

    _motDesICMS;
    get motDesICMS() {
        return this._motDesICMS;
    }

    set motDesICMS(value: any) {
        validate(value, {
            "whiteSpace": "preserve",
            "enumeration": ["1", "3", "4", "5", "6", "7", "8", "9", "10", "11", "16", "90"]
        });
        this._motDesICMS = value
    }
}

export class TNFe_InfNFe_Det_Imposto_ICMS_ICMS51 {
    _orig;
    get orig() {
        return this._orig;
    }

    set orig(value: any) {
        Torig(value);
        this._orig = value
    }

    _CST;
    get CST() {
        return this._CST;
    }

    set CST(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["51"]});
        this._CST = value
    }

    _modBC;
    get modBC() {
        return this._modBC;
    }

    set modBC(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3"]});
        this._modBC = value
    }

    _pRedBC;
    get pRedBC() {
        return this._pRedBC;
    }

    set pRedBC(value: any) {
        TDec_0302a04(value);
        this._pRedBC = value
    }

    _vBC;
    get vBC() {
        return this._vBC;
    }

    set vBC(value: any) {
        TDec_1302(value);
        this._vBC = value
    }

    _pICMS;
    get pICMS() {
        return this._pICMS;
    }

    set pICMS(value: any) {
        TDec_0302a04(value);
        this._pICMS = value
    }

    _vICMSOp;
    get vICMSOp() {
        return this._vICMSOp;
    }

    set vICMSOp(value: any) {
        TDec_1302(value);
        this._vICMSOp = value
    }

    _pDif;
    get pDif() {
        return this._pDif;
    }

    set pDif(value: any) {
        TDec_0302a04Max100(value);
        this._pDif = value
    }

    _vICMSDif;
    get vICMSDif() {
        return this._vICMSDif;
    }

    set vICMSDif(value: any) {
        TDec_1302(value);
        this._vICMSDif = value
    }

    _vICMS;
    get vICMS() {
        return this._vICMS;
    }

    set vICMS(value: any) {
        TDec_1302(value);
        this._vICMS = value
    }

    _vBCFCP;
    get vBCFCP() {
        return this._vBCFCP;
    }

    set vBCFCP(value: any) {
        TDec_1302(value);
        this._vBCFCP = value
    }

    _pFCP;
    get pFCP() {
        return this._pFCP;
    }

    set pFCP(value: any) {
        TDec_0302a04Opc(value);
        this._pFCP = value
    }

    _vFCP;
    get vFCP() {
        return this._vFCP;
    }

    set vFCP(value: any) {
        TDec_1302(value);
        this._vFCP = value
    }
}

export class TNFe_InfNFe_Det_Imposto_ICMS_ICMS60 {
    _orig;
    get orig() {
        return this._orig;
    }

    set orig(value: any) {
        Torig(value);
        this._orig = value
    }

    _CST;
    get CST() {
        return this._CST;
    }

    set CST(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["60"]});
        this._CST = value
    }

    _vBCSTRet;
    get vBCSTRet() {
        return this._vBCSTRet;
    }

    set vBCSTRet(value: any) {
        TDec_1302(value);
        this._vBCSTRet = value
    }

    _pST;
    get pST() {
        return this._pST;
    }

    set pST(value: any) {
        TDec_0302a04Opc(value);
        this._pST = value
    }

    _vICMSSTRet;
    get vICMSSTRet() {
        return this._vICMSSTRet;
    }

    set vICMSSTRet(value: any) {
        TDec_1302(value);
        this._vICMSSTRet = value
    }

    _vBCFCPSTRet;
    get vBCFCPSTRet() {
        return this._vBCFCPSTRet;
    }

    set vBCFCPSTRet(value: any) {
        TDec_1302(value);
        this._vBCFCPSTRet = value
    }

    _pFCPSTRet;
    get pFCPSTRet() {
        return this._pFCPSTRet;
    }

    set pFCPSTRet(value: any) {
        TDec_0302a04Opc(value);
        this._pFCPSTRet = value
    }

    _vFCPSTRet;
    get vFCPSTRet() {
        return this._vFCPSTRet;
    }

    set vFCPSTRet(value: any) {
        TDec_1302(value);
        this._vFCPSTRet = value
    }
}

export class TNFe_InfNFe_Det_Imposto_ICMS_ICMS70 {
    _orig;
    get orig() {
        return this._orig;
    }

    set orig(value: any) {
        Torig(value);
        this._orig = value
    }

    _CST;
    get CST() {
        return this._CST;
    }

    set CST(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["70"]});
        this._CST = value
    }

    _modBC;
    get modBC() {
        return this._modBC;
    }

    set modBC(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3"]});
        this._modBC = value
    }

    _pRedBC;
    get pRedBC() {
        return this._pRedBC;
    }

    set pRedBC(value: any) {
        TDec_0302a04(value);
        this._pRedBC = value
    }

    _vBC;
    get vBC() {
        return this._vBC;
    }

    set vBC(value: any) {
        TDec_1302(value);
        this._vBC = value
    }

    _pICMS;
    get pICMS() {
        return this._pICMS;
    }

    set pICMS(value: any) {
        TDec_0302a04(value);
        this._pICMS = value
    }

    _vICMS;
    get vICMS() {
        return this._vICMS;
    }

    set vICMS(value: any) {
        TDec_1302(value);
        this._vICMS = value
    }

    _vBCFCP;
    get vBCFCP() {
        return this._vBCFCP;
    }

    set vBCFCP(value: any) {
        TDec_1302(value);
        this._vBCFCP = value
    }

    _pFCP;
    get pFCP() {
        return this._pFCP;
    }

    set pFCP(value: any) {
        TDec_0302a04Opc(value);
        this._pFCP = value
    }

    _vFCP;
    get vFCP() {
        return this._vFCP;
    }

    set vFCP(value: any) {
        TDec_1302(value);
        this._vFCP = value
    }

    _modBCST;
    get modBCST() {
        return this._modBCST;
    }

    set modBCST(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "5"]});
        this._modBCST = value
    }

    _pMVAST;
    get pMVAST() {
        return this._pMVAST;
    }

    set pMVAST(value: any) {
        TDec_0302a04Opc(value);
        this._pMVAST = value
    }

    _pRedBCST;
    get pRedBCST() {
        return this._pRedBCST;
    }

    set pRedBCST(value: any) {
        TDec_0302a04Opc(value);
        this._pRedBCST = value
    }

    _vBCST;
    get vBCST() {
        return this._vBCST;
    }

    set vBCST(value: any) {
        TDec_1302(value);
        this._vBCST = value
    }

    _pICMSST;
    get pICMSST() {
        return this._pICMSST;
    }

    set pICMSST(value: any) {
        TDec_0302a04(value);
        this._pICMSST = value
    }

    _vICMSST;
    get vICMSST() {
        return this._vICMSST;
    }

    set vICMSST(value: any) {
        TDec_1302(value);
        this._vICMSST = value
    }

    _vBCFCPST;
    get vBCFCPST() {
        return this._vBCFCPST;
    }

    set vBCFCPST(value: any) {
        TDec_1302(value);
        this._vBCFCPST = value
    }

    _pFCPST;
    get pFCPST() {
        return this._pFCPST;
    }

    set pFCPST(value: any) {
        TDec_0302a04Opc(value);
        this._pFCPST = value
    }

    _vFCPST;
    get vFCPST() {
        return this._vFCPST;
    }

    set vFCPST(value: any) {
        TDec_1302(value);
        this._vFCPST = value
    }

    _vICMSDeson;
    get vICMSDeson() {
        return this._vICMSDeson;
    }

    set vICMSDeson(value: any) {
        TDec_1302(value);
        this._vICMSDeson = value
    }

    _motDesICMS;
    get motDesICMS() {
        return this._motDesICMS;
    }

    set motDesICMS(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["3", "9", "12"]});
        this._motDesICMS = value
    }
}

export class TNFe_InfNFe_Det_Imposto_ICMS_ICMS90 {
    _orig;
    get orig() {
        return this._orig;
    }

    set orig(value: any) {
        Torig(value);
        this._orig = value
    }

    _CST;
    get CST() {
        return this._CST;
    }

    set CST(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["90"]});
        this._CST = value
    }

    _modBC;
    get modBC() {
        return this._modBC;
    }

    set modBC(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3"]});
        this._modBC = value
    }

    _vBC;
    get vBC() {
        return this._vBC;
    }

    set vBC(value: any) {
        TDec_1302(value);
        this._vBC = value
    }

    _pRedBC;
    get pRedBC() {
        return this._pRedBC;
    }

    set pRedBC(value: any) {
        TDec_0302a04Opc(value);
        this._pRedBC = value
    }

    _pICMS;
    get pICMS() {
        return this._pICMS;
    }

    set pICMS(value: any) {
        TDec_0302a04(value);
        this._pICMS = value
    }

    _vICMS;
    get vICMS() {
        return this._vICMS;
    }

    set vICMS(value: any) {
        TDec_1302(value);
        this._vICMS = value
    }

    _vBCFCP;
    get vBCFCP() {
        return this._vBCFCP;
    }

    set vBCFCP(value: any) {
        TDec_1302(value);
        this._vBCFCP = value
    }

    _pFCP;
    get pFCP() {
        return this._pFCP;
    }

    set pFCP(value: any) {
        TDec_0302a04Opc(value);
        this._pFCP = value
    }

    _vFCP;
    get vFCP() {
        return this._vFCP;
    }

    set vFCP(value: any) {
        TDec_1302(value);
        this._vFCP = value
    }

    _modBCST;
    get modBCST() {
        return this._modBCST;
    }

    set modBCST(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "5"]});
        this._modBCST = value
    }

    _pMVAST;
    get pMVAST() {
        return this._pMVAST;
    }

    set pMVAST(value: any) {
        TDec_0302a04Opc(value);
        this._pMVAST = value
    }

    _pRedBCST;
    get pRedBCST() {
        return this._pRedBCST;
    }

    set pRedBCST(value: any) {
        TDec_0302a04Opc(value);
        this._pRedBCST = value
    }

    _vBCST;
    get vBCST() {
        return this._vBCST;
    }

    set vBCST(value: any) {
        TDec_1302(value);
        this._vBCST = value
    }

    _pICMSST;
    get pICMSST() {
        return this._pICMSST;
    }

    set pICMSST(value: any) {
        TDec_0302a04(value);
        this._pICMSST = value
    }

    _vICMSST;
    get vICMSST() {
        return this._vICMSST;
    }

    set vICMSST(value: any) {
        TDec_1302(value);
        this._vICMSST = value
    }

    _vBCFCPST;
    get vBCFCPST() {
        return this._vBCFCPST;
    }

    set vBCFCPST(value: any) {
        TDec_1302(value);
        this._vBCFCPST = value
    }

    _pFCPST;
    get pFCPST() {
        return this._pFCPST;
    }

    set pFCPST(value: any) {
        TDec_0302a04Opc(value);
        this._pFCPST = value
    }

    _vFCPST;
    get vFCPST() {
        return this._vFCPST;
    }

    set vFCPST(value: any) {
        TDec_1302(value);
        this._vFCPST = value
    }

    _vICMSDeson;
    get vICMSDeson() {
        return this._vICMSDeson;
    }

    set vICMSDeson(value: any) {
        TDec_1302(value);
        this._vICMSDeson = value
    }

    _motDesICMS;
    get motDesICMS() {
        return this._motDesICMS;
    }

    set motDesICMS(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["3", "9", "12"]});
        this._motDesICMS = value
    }
}

export class TNFe_InfNFe_Det_Imposto_ICMS_ICMSPart {
    _orig;
    get orig() {
        return this._orig;
    }

    set orig(value: any) {
        Torig(value);
        this._orig = value
    }

    _CST;
    get CST() {
        return this._CST;
    }

    set CST(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["10", "90"]});
        this._CST = value
    }

    _modBC;
    get modBC() {
        return this._modBC;
    }

    set modBC(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3"]});
        this._modBC = value
    }

    _vBC;
    get vBC() {
        return this._vBC;
    }

    set vBC(value: any) {
        TDec_1302(value);
        this._vBC = value
    }

    _pRedBC;
    get pRedBC() {
        return this._pRedBC;
    }

    set pRedBC(value: any) {
        TDec_0302a04Opc(value);
        this._pRedBC = value
    }

    _pICMS;
    get pICMS() {
        return this._pICMS;
    }

    set pICMS(value: any) {
        TDec_0302a04(value);
        this._pICMS = value
    }

    _vICMS;
    get vICMS() {
        return this._vICMS;
    }

    set vICMS(value: any) {
        TDec_1302(value);
        this._vICMS = value
    }

    _modBCST;
    get modBCST() {
        return this._modBCST;
    }

    set modBCST(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "5"]});
        this._modBCST = value
    }

    _pMVAST;
    get pMVAST() {
        return this._pMVAST;
    }

    set pMVAST(value: any) {
        TDec_0302a04Opc(value);
        this._pMVAST = value
    }

    _pRedBCST;
    get pRedBCST() {
        return this._pRedBCST;
    }

    set pRedBCST(value: any) {
        TDec_0302a04Opc(value);
        this._pRedBCST = value
    }

    _vBCST;
    get vBCST() {
        return this._vBCST;
    }

    set vBCST(value: any) {
        TDec_1302(value);
        this._vBCST = value
    }

    _pICMSST;
    get pICMSST() {
        return this._pICMSST;
    }

    set pICMSST(value: any) {
        TDec_0302a04(value);
        this._pICMSST = value
    }

    _vICMSST;
    get vICMSST() {
        return this._vICMSST;
    }

    set vICMSST(value: any) {
        TDec_1302(value);
        this._vICMSST = value
    }

    _pBCOp;
    get pBCOp() {
        return this._pBCOp;
    }

    set pBCOp(value: any) {
        TDec_0302a04Opc(value);
        this._pBCOp = value
    }

    _UFST;
    get UFST() {
        return this._UFST;
    }

    set UFST(value: any) {
        TUf(value);
        this._UFST = value
    }
}

export class TNFe_InfNFe_Det_Imposto_ICMS_ICMSST {
    _orig;
    get orig() {
        return this._orig;
    }

    set orig(value: any) {
        Torig(value);
        this._orig = value
    }

    _CST;
    get CST() {
        return this._CST;
    }

    set CST(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["41", "60"]});
        this._CST = value
    }

    _vBCSTRet;
    get vBCSTRet() {
        return this._vBCSTRet;
    }

    set vBCSTRet(value: any) {
        TDec_1302(value);
        this._vBCSTRet = value
    }

    _vICMSSTRet;
    get vICMSSTRet() {
        return this._vICMSSTRet;
    }

    set vICMSSTRet(value: any) {
        TDec_1302(value);
        this._vICMSSTRet = value
    }

    _vBCSTDest;
    get vBCSTDest() {
        return this._vBCSTDest;
    }

    set vBCSTDest(value: any) {
        TDec_1302(value);
        this._vBCSTDest = value
    }

    _vICMSSTDest;
    get vICMSSTDest() {
        return this._vICMSSTDest;
    }

    set vICMSSTDest(value: any) {
        TDec_1302(value);
        this._vICMSSTDest = value
    }
}

export class TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN101 {
    _orig;
    get orig() {
        return this._orig;
    }

    set orig(value: any) {
        Torig(value);
        this._orig = value
    }

    _CSOSN;
    get CSOSN() {
        return this._CSOSN;
    }

    set CSOSN(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["101"]});
        this._CSOSN = value
    }

    _pCredSN;
    get pCredSN() {
        return this._pCredSN;
    }

    set pCredSN(value: any) {
        TDec_0302a04(value);
        this._pCredSN = value
    }

    _vCredICMSSN;
    get vCredICMSSN() {
        return this._vCredICMSSN;
    }

    set vCredICMSSN(value: any) {
        TDec_1302(value);
        this._vCredICMSSN = value
    }
}

export class TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN102 {
    _orig;
    get orig() {
        return this._orig;
    }

    set orig(value: any) {
        Torig(value);
        this._orig = value
    }

    _CSOSN;
    get CSOSN() {
        return this._CSOSN;
    }

    set CSOSN(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["102", "103", "300", "400"]});
        this._CSOSN = value
    }
}

export class TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN201 {
    _orig;
    get orig() {
        return this._orig;
    }

    set orig(value: any) {
        Torig(value);
        this._orig = value
    }

    _CSOSN;
    get CSOSN() {
        return this._CSOSN;
    }

    set CSOSN(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["201"]});
        this._CSOSN = value
    }

    _modBCST;
    get modBCST() {
        return this._modBCST;
    }

    set modBCST(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "5"]});
        this._modBCST = value
    }

    _pMVAST;
    get pMVAST() {
        return this._pMVAST;
    }

    set pMVAST(value: any) {
        TDec_0302a04Opc(value);
        this._pMVAST = value
    }

    _pRedBCST;
    get pRedBCST() {
        return this._pRedBCST;
    }

    set pRedBCST(value: any) {
        TDec_0302a04Opc(value);
        this._pRedBCST = value
    }

    _vBCST;
    get vBCST() {
        return this._vBCST;
    }

    set vBCST(value: any) {
        TDec_1302(value);
        this._vBCST = value
    }

    _pICMSST;
    get pICMSST() {
        return this._pICMSST;
    }

    set pICMSST(value: any) {
        TDec_0302a04(value);
        this._pICMSST = value
    }

    _vICMSST;
    get vICMSST() {
        return this._vICMSST;
    }

    set vICMSST(value: any) {
        TDec_1302(value);
        this._vICMSST = value
    }

    _vBCFCPST;
    get vBCFCPST() {
        return this._vBCFCPST;
    }

    set vBCFCPST(value: any) {
        TDec_1302(value);
        this._vBCFCPST = value
    }

    _pFCPST;
    get pFCPST() {
        return this._pFCPST;
    }

    set pFCPST(value: any) {
        TDec_0302a04Opc(value);
        this._pFCPST = value
    }

    _vFCPST;
    get vFCPST() {
        return this._vFCPST;
    }

    set vFCPST(value: any) {
        TDec_1302(value);
        this._vFCPST = value
    }

    _pCredSN;
    get pCredSN() {
        return this._pCredSN;
    }

    set pCredSN(value: any) {
        TDec_0302a04(value);
        this._pCredSN = value
    }

    _vCredICMSSN;
    get vCredICMSSN() {
        return this._vCredICMSSN;
    }

    set vCredICMSSN(value: any) {
        TDec_1302(value);
        this._vCredICMSSN = value
    }
}

export class TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN202 {
    _orig;
    get orig() {
        return this._orig;
    }

    set orig(value: any) {
        Torig(value);
        this._orig = value
    }

    _CSOSN;
    get CSOSN() {
        return this._CSOSN;
    }

    set CSOSN(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["202", "203"]});
        this._CSOSN = value
    }

    _modBCST;
    get modBCST() {
        return this._modBCST;
    }

    set modBCST(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "5"]});
        this._modBCST = value
    }

    _pMVAST;
    get pMVAST() {
        return this._pMVAST;
    }

    set pMVAST(value: any) {
        TDec_0302a04Opc(value);
        this._pMVAST = value
    }

    _pRedBCST;
    get pRedBCST() {
        return this._pRedBCST;
    }

    set pRedBCST(value: any) {
        TDec_0302a04Opc(value);
        this._pRedBCST = value
    }

    _vBCST;
    get vBCST() {
        return this._vBCST;
    }

    set vBCST(value: any) {
        TDec_1302(value);
        this._vBCST = value
    }

    _pICMSST;
    get pICMSST() {
        return this._pICMSST;
    }

    set pICMSST(value: any) {
        TDec_0302a04(value);
        this._pICMSST = value
    }

    _vICMSST;
    get vICMSST() {
        return this._vICMSST;
    }

    set vICMSST(value: any) {
        TDec_1302(value);
        this._vICMSST = value
    }

    _vBCFCPST;
    get vBCFCPST() {
        return this._vBCFCPST;
    }

    set vBCFCPST(value: any) {
        TDec_1302(value);
        this._vBCFCPST = value
    }

    _pFCPST;
    get pFCPST() {
        return this._pFCPST;
    }

    set pFCPST(value: any) {
        TDec_0302a04Opc(value);
        this._pFCPST = value
    }

    _vFCPST;
    get vFCPST() {
        return this._vFCPST;
    }

    set vFCPST(value: any) {
        TDec_1302(value);
        this._vFCPST = value
    }
}

export class TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN500 {
    _orig;
    get orig() {
        return this._orig;
    }

    set orig(value: any) {
        Torig(value);
        this._orig = value
    }

    _CSOSN;
    get CSOSN() {
        return this._CSOSN;
    }

    set CSOSN(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["500"]});
        this._CSOSN = value
    }

    _vBCSTRet;
    get vBCSTRet() {
        return this._vBCSTRet;
    }

    set vBCSTRet(value: any) {
        TDec_1302(value);
        this._vBCSTRet = value
    }

    _pST;
    get pST() {
        return this._pST;
    }

    set pST(value: any) {
        TDec_0302a04Opc(value);
        this._pST = value
    }

    _vICMSSTRet;
    get vICMSSTRet() {
        return this._vICMSSTRet;
    }

    set vICMSSTRet(value: any) {
        TDec_1302(value);
        this._vICMSSTRet = value
    }

    _vBCFCPSTRet;
    get vBCFCPSTRet() {
        return this._vBCFCPSTRet;
    }

    set vBCFCPSTRet(value: any) {
        TDec_1302(value);
        this._vBCFCPSTRet = value
    }

    _pFCPSTRet;
    get pFCPSTRet() {
        return this._pFCPSTRet;
    }

    set pFCPSTRet(value: any) {
        TDec_0302a04Opc(value);
        this._pFCPSTRet = value
    }

    _vFCPSTRet;
    get vFCPSTRet() {
        return this._vFCPSTRet;
    }

    set vFCPSTRet(value: any) {
        TDec_1302(value);
        this._vFCPSTRet = value
    }
}

export class TNFe_InfNFe_Det_Imposto_ICMS_ICMSSN900 {
    _orig;
    get orig() {
        return this._orig;
    }

    set orig(value: any) {
        Torig(value);
        this._orig = value
    }

    _CSOSN;
    get CSOSN() {
        return this._CSOSN;
    }

    set CSOSN(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["900"]});
        this._CSOSN = value
    }

    _modBC;
    get modBC() {
        return this._modBC;
    }

    set modBC(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3"]});
        this._modBC = value
    }

    _vBC;
    get vBC() {
        return this._vBC;
    }

    set vBC(value: any) {
        TDec_1302(value);
        this._vBC = value
    }

    _pRedBC;
    get pRedBC() {
        return this._pRedBC;
    }

    set pRedBC(value: any) {
        TDec_0302a04Opc(value);
        this._pRedBC = value
    }

    _pICMS;
    get pICMS() {
        return this._pICMS;
    }

    set pICMS(value: any) {
        TDec_0302a04(value);
        this._pICMS = value
    }

    _vICMS;
    get vICMS() {
        return this._vICMS;
    }

    set vICMS(value: any) {
        TDec_1302(value);
        this._vICMS = value
    }

    _modBCST;
    get modBCST() {
        return this._modBCST;
    }

    set modBCST(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "5"]});
        this._modBCST = value
    }

    _pMVAST;
    get pMVAST() {
        return this._pMVAST;
    }

    set pMVAST(value: any) {
        TDec_0302a04Opc(value);
        this._pMVAST = value
    }

    _pRedBCST;
    get pRedBCST() {
        return this._pRedBCST;
    }

    set pRedBCST(value: any) {
        TDec_0302a04Opc(value);
        this._pRedBCST = value
    }

    _vBCST;
    get vBCST() {
        return this._vBCST;
    }

    set vBCST(value: any) {
        TDec_1302(value);
        this._vBCST = value
    }

    _pICMSST;
    get pICMSST() {
        return this._pICMSST;
    }

    set pICMSST(value: any) {
        TDec_0302a04(value);
        this._pICMSST = value
    }

    _vICMSST;
    get vICMSST() {
        return this._vICMSST;
    }

    set vICMSST(value: any) {
        TDec_1302(value);
        this._vICMSST = value
    }

    _vBCFCPST;
    get vBCFCPST() {
        return this._vBCFCPST;
    }

    set vBCFCPST(value: any) {
        TDec_1302(value);
        this._vBCFCPST = value
    }

    _pFCPST;
    get pFCPST() {
        return this._pFCPST;
    }

    set pFCPST(value: any) {
        TDec_0302a04Opc(value);
        this._pFCPST = value
    }

    _vFCPST;
    get vFCPST() {
        return this._vFCPST;
    }

    set vFCPST(value: any) {
        TDec_1302(value);
        this._vFCPST = value
    }

    _pCredSN;
    get pCredSN() {
        return this._pCredSN;
    }

    set pCredSN(value: any) {
        TDec_0302a04(value);
        this._pCredSN = value
    }

    _vCredICMSSN;
    get vCredICMSSN() {
        return this._vCredICMSSN;
    }

    set vCredICMSSN(value: any) {
        TDec_1302(value);
        this._vCredICMSSN = value
    }
}

export class TNFe_InfNFe_Det_Imposto_II {
    _vBC;
    get vBC() {
        return this._vBC;
    }

    set vBC(value: any) {
        TDec_1302(value);
        this._vBC = value
    }

    _vDespAdu;
    get vDespAdu() {
        return this._vDespAdu;
    }

    set vDespAdu(value: any) {
        TDec_1302(value);
        this._vDespAdu = value
    }

    _vII;
    get vII() {
        return this._vII;
    }

    set vII(value: any) {
        TDec_1302(value);
        this._vII = value
    }

    _vIOF;
    get vIOF() {
        return this._vIOF;
    }

    set vIOF(value: any) {
        TDec_1302(value);
        this._vIOF = value
    }
}

export class TNFe_InfNFe_Det_Imposto_ISSQN {
    _vBC;
    get vBC() {
        return this._vBC;
    }

    set vBC(value: any) {
        TDec_1302(value);
        this._vBC = value
    }

    _vAliq;
    get vAliq() {
        return this._vAliq;
    }

    set vAliq(value: any) {
        TDec_0302a04(value);
        this._vAliq = value
    }

    _vISSQN;
    get vISSQN() {
        return this._vISSQN;
    }

    set vISSQN(value: any) {
        TDec_1302(value);
        this._vISSQN = value
    }

    _cMunFG;
    get cMunFG() {
        return this._cMunFG;
    }

    set cMunFG(value: any) {
        TCodMunIBGE(value);
        this._cMunFG = value
    }

    _cListServ;
    get cListServ() {
        return this._cListServ;
    }

    set cListServ(value: any) {
        TCListServ(value);
        this._cListServ = value
    }

    _vDeducao;
    get vDeducao() {
        return this._vDeducao;
    }

    set vDeducao(value: any) {
        TDec_1302Opc(value);
        this._vDeducao = value
    }

    _vOutro;
    get vOutro() {
        return this._vOutro;
    }

    set vOutro(value: any) {
        TDec_1302Opc(value);
        this._vOutro = value
    }

    _vDescIncond;
    get vDescIncond() {
        return this._vDescIncond;
    }

    set vDescIncond(value: any) {
        TDec_1302Opc(value);
        this._vDescIncond = value
    }

    _vDescCond;
    get vDescCond() {
        return this._vDescCond;
    }

    set vDescCond(value: any) {
        TDec_1302Opc(value);
        this._vDescCond = value
    }

    _vISSRet;
    get vISSRet() {
        return this._vISSRet;
    }

    set vISSRet(value: any) {
        TDec_1302Opc(value);
        this._vISSRet = value
    }

    _indISS;
    get indISS() {
        return this._indISS;
    }

    set indISS(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["1", "2", "3", "4", "5", "6", "7"]});
        this._indISS = value
    }

    _cServico;
    get cServico() {
        return this._cServico;
    }

    set cServico(value: any) {
        validate(value, {"whiteSpace": "preserve", "minLength": "1", "maxLength": "20"});
        this._cServico = value
    }

    _cMun;
    get cMun() {
        return this._cMun;
    }

    set cMun(value: any) {
        TCodMunIBGE(value);
        this._cMun = value
    }

    _cPais;
    get cPais() {
        return this._cPais;
    }

    set cPais(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{1,4}"});
        this._cPais = value
    }

    _nProcesso;
    get nProcesso() {
        return this._nProcesso;
    }

    set nProcesso(value: any) {
        validate(value, {"whiteSpace": "preserve", "minLength": "1", "maxLength": "30"});
        this._nProcesso = value
    }

    _indIncentivo;
    get indIncentivo() {
        return this._indIncentivo;
    }

    set indIncentivo(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["1", "2"]});
        this._indIncentivo = value
    }
}

export class TNFe_InfNFe_Det_Imposto_PIS {
    _PISAliq;
    get PISAliq() {
        return this._PISAliq;
    }

    set PISAliq(value: TNFe_InfNFe_Det_Imposto_PIS_PISAliq) {
        this._PISAliq = value
    }

    _PISQtde;
    get PISQtde() {
        return this._PISQtde;
    }

    set PISQtde(value: TNFe_InfNFe_Det_Imposto_PIS_PISQtde) {
        this._PISQtde = value
    }

    _PISNT;
    get PISNT() {
        return this._PISNT;
    }

    set PISNT(value: TNFe_InfNFe_Det_Imposto_PIS_PISNT) {
        this._PISNT = value
    }

    _PISOutr;
    get PISOutr() {
        return this._PISOutr;
    }

    set PISOutr(value: TNFe_InfNFe_Det_Imposto_PIS_PISOutr) {
        this._PISOutr = value
    }
}

export class TNFe_InfNFe_Det_Imposto_PIS_PISAliq {
    _CST;
    get CST() {
        return this._CST;
    }

    set CST(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["01", "02"]});
        this._CST = value
    }

    _vBC;
    get vBC() {
        return this._vBC;
    }

    set vBC(value: any) {
        TDec_1302(value);
        this._vBC = value
    }

    _pPIS;
    get pPIS() {
        return this._pPIS;
    }

    set pPIS(value: any) {
        TDec_0302a04(value);
        this._pPIS = value
    }

    _vPIS;
    get vPIS() {
        return this._vPIS;
    }

    set vPIS(value: any) {
        TDec_1302(value);
        this._vPIS = value
    }
}

export class TNFe_InfNFe_Det_Imposto_PIS_PISQtde {
    _CST;
    get CST() {
        return this._CST;
    }

    set CST(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["03"]});
        this._CST = value
    }

    _qBCProd;
    get qBCProd() {
        return this._qBCProd;
    }

    set qBCProd(value: any) {
        TDec_1204v(value);
        this._qBCProd = value
    }

    _vAliqProd;
    get vAliqProd() {
        return this._vAliqProd;
    }

    set vAliqProd(value: any) {
        TDec_1104v(value);
        this._vAliqProd = value
    }

    _vPIS;
    get vPIS() {
        return this._vPIS;
    }

    set vPIS(value: any) {
        TDec_1302(value);
        this._vPIS = value
    }
}

export class TNFe_InfNFe_Det_Imposto_PIS_PISNT {
    _CST;
    get CST() {
        return this._CST;
    }

    set CST(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["04", "05", "06", "07", "08", "09"]});
        this._CST = value
    }
}

export class TNFe_InfNFe_Det_Imposto_PIS_PISOutr {
    _CST;
    get CST() {
        return this._CST;
    }

    set CST(value: any) {
        validate(value, {
            "whiteSpace": "preserve",
            "enumeration": ["49", "50", "51", "52", "53", "54", "55", "56", "60", "61", "62", "63", "64", "65", "66", "67", "70", "71", "72", "73", "74", "75", "98", "99"]
        });
        this._CST = value
    }

    _vBC;
    get vBC() {
        return this._vBC;
    }

    set vBC(value: any) {
        TDec_1302(value);
        this._vBC = value
    }

    _pPIS;
    get pPIS() {
        return this._pPIS;
    }

    set pPIS(value: any) {
        TDec_0302a04(value);
        this._pPIS = value
    }

    _qBCProd;
    get qBCProd() {
        return this._qBCProd;
    }

    set qBCProd(value: any) {
        TDec_1204v(value);
        this._qBCProd = value
    }

    _vAliqProd;
    get vAliqProd() {
        return this._vAliqProd;
    }

    set vAliqProd(value: any) {
        TDec_1104v(value);
        this._vAliqProd = value
    }

    _vPIS;
    get vPIS() {
        return this._vPIS;
    }

    set vPIS(value: any) {
        TDec_1302(value);
        this._vPIS = value
    }
}

export class TNFe_InfNFe_Det_Imposto_PISST {
    _vBC;
    get vBC() {
        return this._vBC;
    }

    set vBC(value: any) {
        TDec_1302Opc(value);
        this._vBC = value
    }

    _pPIS;
    get pPIS() {
        return this._pPIS;
    }

    set pPIS(value: any) {
        TDec_0302a04(value);
        this._pPIS = value
    }

    _qBCProd;
    get qBCProd() {
        return this._qBCProd;
    }

    set qBCProd(value: any) {
        TDec_1204(value);
        this._qBCProd = value
    }

    _vAliqProd;
    get vAliqProd() {
        return this._vAliqProd;
    }

    set vAliqProd(value: any) {
        TDec_1104(value);
        this._vAliqProd = value
    }

    _vPIS;
    get vPIS() {
        return this._vPIS;
    }

    set vPIS(value: any) {
        TDec_1302(value);
        this._vPIS = value
    }
}

export class TNFe_InfNFe_Det_Imposto_COFINS {
    _COFINSAliq;
    get COFINSAliq() {
        return this._COFINSAliq;
    }

    set COFINSAliq(value: TNFe_InfNFe_Det_Imposto_COFINS_COFINSAliq) {
        this._COFINSAliq = value
    }

    _COFINSQtde;
    get COFINSQtde() {
        return this._COFINSQtde;
    }

    set COFINSQtde(value: TNFe_InfNFe_Det_Imposto_COFINS_COFINSQtde) {
        this._COFINSQtde = value
    }

    _COFINSNT;
    get COFINSNT() {
        return this._COFINSNT;
    }

    set COFINSNT(value: TNFe_InfNFe_Det_Imposto_COFINS_COFINSNT) {
        this._COFINSNT = value
    }

    _COFINSOutr;
    get COFINSOutr() {
        return this._COFINSOutr;
    }

    set COFINSOutr(value: TNFe_InfNFe_Det_Imposto_COFINS_COFINSOutr) {
        this._COFINSOutr = value
    }
}

export class TNFe_InfNFe_Det_Imposto_COFINS_COFINSAliq {
    _CST;
    get CST() {
        return this._CST;
    }

    set CST(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["01", "02"]});
        this._CST = value
    }

    _vBC;
    get vBC() {
        return this._vBC;
    }

    set vBC(value: any) {
        TDec_1302(value);
        this._vBC = value
    }

    _pCOFINS;
    get pCOFINS() {
        return this._pCOFINS;
    }

    set pCOFINS(value: any) {
        TDec_0302a04(value);
        this._pCOFINS = value
    }

    _vCOFINS;
    get vCOFINS() {
        return this._vCOFINS;
    }

    set vCOFINS(value: any) {
        TDec_1302(value);
        this._vCOFINS = value
    }
}

export class TNFe_InfNFe_Det_Imposto_COFINS_COFINSQtde {
    _CST;
    get CST() {
        return this._CST;
    }

    set CST(value: any) {
        validate(value, {"enumeration": ["03"]});
        this._CST = value
    }

    _qBCProd;
    get qBCProd() {
        return this._qBCProd;
    }

    set qBCProd(value: any) {
        TDec_1204v(value);
        this._qBCProd = value
    }

    _vAliqProd;
    get vAliqProd() {
        return this._vAliqProd;
    }

    set vAliqProd(value: any) {
        TDec_1104v(value);
        this._vAliqProd = value
    }

    _vCOFINS;
    get vCOFINS() {
        return this._vCOFINS;
    }

    set vCOFINS(value: any) {
        TDec_1302(value);
        this._vCOFINS = value
    }
}

export class TNFe_InfNFe_Det_Imposto_COFINS_COFINSNT {
    _CST;
    get CST() {
        return this._CST;
    }

    set CST(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["04", "05", "06", "07", "08", "09"]});
        this._CST = value
    }
}

export class TNFe_InfNFe_Det_Imposto_COFINS_COFINSOutr {
    _CST;
    get CST() {
        return this._CST;
    }

    set CST(value: any) {
        validate(value, {
            "whiteSpace": "preserve",
            "enumeration": ["49", "50", "51", "52", "53", "54", "55", "56", "60", "61", "62", "63", "64", "65", "66", "67", "70", "71", "72", "73", "74", "75", "98", "99"]
        });
        this._CST = value
    }

    _vBC;
    get vBC() {
        return this._vBC;
    }

    set vBC(value: any) {
        TDec_1302(value);
        this._vBC = value
    }

    _pCOFINS;
    get pCOFINS() {
        return this._pCOFINS;
    }

    set pCOFINS(value: any) {
        TDec_0302a04(value);
        this._pCOFINS = value
    }

    _qBCProd;
    get qBCProd() {
        return this._qBCProd;
    }

    set qBCProd(value: any) {
        TDec_1204v(value);
        this._qBCProd = value
    }

    _vAliqProd;
    get vAliqProd() {
        return this._vAliqProd;
    }

    set vAliqProd(value: any) {
        TDec_1104v(value);
        this._vAliqProd = value
    }

    _vCOFINS;
    get vCOFINS() {
        return this._vCOFINS;
    }

    set vCOFINS(value: any) {
        TDec_1302(value);
        this._vCOFINS = value
    }
}

export class TNFe_InfNFe_Det_Imposto_COFINSST {
    _vBC;
    get vBC() {
        return this._vBC;
    }

    set vBC(value: any) {
        TDec_1302(value);
        this._vBC = value
    }

    _pCOFINS;
    get pCOFINS() {
        return this._pCOFINS;
    }

    set pCOFINS(value: any) {
        TDec_0302a04(value);
        this._pCOFINS = value
    }

    _qBCProd;
    get qBCProd() {
        return this._qBCProd;
    }

    set qBCProd(value: any) {
        TDec_1204(value);
        this._qBCProd = value
    }

    _vAliqProd;
    get vAliqProd() {
        return this._vAliqProd;
    }

    set vAliqProd(value: any) {
        TDec_1104(value);
        this._vAliqProd = value
    }

    _vCOFINS;
    get vCOFINS() {
        return this._vCOFINS;
    }

    set vCOFINS(value: any) {
        TDec_1302(value);
        this._vCOFINS = value
    }
}

export class TNFe_InfNFe_Det_Imposto_ICMSUFDest {
    _vBCUFDest;
    get vBCUFDest() {
        return this._vBCUFDest;
    }

    set vBCUFDest(value: any) {
        TDec_1302(value);
        this._vBCUFDest = value
    }

    _vBCFCPUFDest;
    get vBCFCPUFDest() {
        return this._vBCFCPUFDest;
    }

    set vBCFCPUFDest(value: any) {
        TDec_1302(value);
        this._vBCFCPUFDest = value
    }

    _pFCPUFDest;
    get pFCPUFDest() {
        return this._pFCPUFDest;
    }

    set pFCPUFDest(value: any) {
        TDec_0302a04(value);
        this._pFCPUFDest = value
    }

    _pICMSUFDest;
    get pICMSUFDest() {
        return this._pICMSUFDest;
    }

    set pICMSUFDest(value: any) {
        TDec_0302a04(value);
        this._pICMSUFDest = value
    }

    _pICMSInter;
    get pICMSInter() {
        return this._pICMSInter;
    }

    set pICMSInter(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["4.00", "7.00", "12.00"]});
        this._pICMSInter = value
    }

    _pICMSInterPart;
    get pICMSInterPart() {
        return this._pICMSInterPart;
    }

    set pICMSInterPart(value: any) {
        TDec_0302a04(value);
        this._pICMSInterPart = value
    }

    _vFCPUFDest;
    get vFCPUFDest() {
        return this._vFCPUFDest;
    }

    set vFCPUFDest(value: any) {
        TDec_1302(value);
        this._vFCPUFDest = value
    }

    _vICMSUFDest;
    get vICMSUFDest() {
        return this._vICMSUFDest;
    }

    set vICMSUFDest(value: any) {
        TDec_1302(value);
        this._vICMSUFDest = value
    }

    _vICMSUFRemet;
    get vICMSUFRemet() {
        return this._vICMSUFRemet;
    }

    set vICMSUFRemet(value: any) {
        TDec_1302(value);
        this._vICMSUFRemet = value
    }
}

export class TNFe_InfNFe_Det_ImpostoDevol {
    _pDevol;
    get pDevol() {
        return this._pDevol;
    }

    set pDevol(value: any) {
        TDec_0302Max100(value);
        this._pDevol = value
    }

    _IPI;
    get IPI() {
        return this._IPI;
    }

    set IPI(value: TNFe_InfNFe_Det_ImpostoDevol_IPI) {
        this._IPI = value
    }
}

export class TNFe_InfNFe_Det_ImpostoDevol_IPI {
    _vIPIDevol;
    get vIPIDevol() {
        return this._vIPIDevol;
    }

    set vIPIDevol(value: any) {
        TDec_1302(value);
        this._vIPIDevol = value
    }
}

export class TNFe_InfNFe_Total {
    _ICMSTot;
    get ICMSTot() {
        return this._ICMSTot;
    }

    set ICMSTot(value: TNFe_InfNFe_Total_ICMSTot) {
        this._ICMSTot = value
    }

    _ISSQNtot;
    get ISSQNtot() {
        return this._ISSQNtot;
    }

    set ISSQNtot(value: TNFe_InfNFe_Total_ISSQNtot) {
        this._ISSQNtot = value
    }

    _retTrib;
    get retTrib() {
        return this._retTrib;
    }

    set retTrib(value: TNFe_InfNFe_Total_RetTrib) {
        this._retTrib = value
    }
}

export class TNFe_InfNFe_Total_ICMSTot {
    _vBC;
    get vBC() {
        return this._vBC;
    }

    set vBC(value: any) {
        TDec_1302(value);
        this._vBC = value
    }

    _vICMS;
    get vICMS() {
        return this._vICMS;
    }

    set vICMS(value: any) {
        TDec_1302(value);
        this._vICMS = value
    }

    _vICMSDeson;
    get vICMSDeson() {
        return this._vICMSDeson;
    }

    set vICMSDeson(value: any) {
        TDec_1302(value);
        this._vICMSDeson = value
    }

    _vFCPUFDest;
    get vFCPUFDest() {
        return this._vFCPUFDest;
    }

    set vFCPUFDest(value: any) {
        TDec_1302(value);
        this._vFCPUFDest = value
    }

    _vICMSUFDest;
    get vICMSUFDest() {
        return this._vICMSUFDest;
    }

    set vICMSUFDest(value: any) {
        TDec_1302(value);
        this._vICMSUFDest = value
    }

    _vICMSUFRemet;
    get vICMSUFRemet() {
        return this._vICMSUFRemet;
    }

    set vICMSUFRemet(value: any) {
        TDec_1302(value);
        this._vICMSUFRemet = value
    }

    _vFCP;
    get vFCP() {
        return this._vFCP;
    }

    set vFCP(value: any) {
        TDec_1302(value);
        this._vFCP = value
    }

    _vBCST;
    get vBCST() {
        return this._vBCST;
    }

    set vBCST(value: any) {
        TDec_1302(value);
        this._vBCST = value
    }

    _vST;
    get vST() {
        return this._vST;
    }

    set vST(value: any) {
        TDec_1302(value);
        this._vST = value
    }

    _vFCPST;
    get vFCPST() {
        return this._vFCPST;
    }

    set vFCPST(value: any) {
        TDec_1302(value);
        this._vFCPST = value
    }

    _vFCPSTRet;
    get vFCPSTRet() {
        return this._vFCPSTRet;
    }

    set vFCPSTRet(value: any) {
        TDec_1302(value);
        this._vFCPSTRet = value
    }

    _vProd;
    get vProd() {
        return this._vProd;
    }

    set vProd(value: any) {
        TDec_1302(value);
        this._vProd = value
    }

    _vFrete;
    get vFrete() {
        return this._vFrete;
    }

    set vFrete(value: any) {
        TDec_1302(value);
        this._vFrete = value
    }

    _vSeg;
    get vSeg() {
        return this._vSeg;
    }

    set vSeg(value: any) {
        TDec_1302(value);
        this._vSeg = value
    }

    _vDesc;
    get vDesc() {
        return this._vDesc;
    }

    set vDesc(value: any) {
        TDec_1302(value);
        this._vDesc = value
    }

    _vII;
    get vII() {
        return this._vII;
    }

    set vII(value: any) {
        TDec_1302(value);
        this._vII = value
    }

    _vIPI;
    get vIPI() {
        return this._vIPI;
    }

    set vIPI(value: any) {
        TDec_1302(value);
        this._vIPI = value
    }

    _vIPIDevol;
    get vIPIDevol() {
        return this._vIPIDevol;
    }

    set vIPIDevol(value: any) {
        TDec_1302(value);
        this._vIPIDevol = value
    }

    _vPIS;
    get vPIS() {
        return this._vPIS;
    }

    set vPIS(value: any) {
        TDec_1302(value);
        this._vPIS = value
    }

    _vCOFINS;
    get vCOFINS() {
        return this._vCOFINS;
    }

    set vCOFINS(value: any) {
        TDec_1302(value);
        this._vCOFINS = value
    }

    _vOutro;
    get vOutro() {
        return this._vOutro;
    }

    set vOutro(value: any) {
        TDec_1302(value);
        this._vOutro = value
    }

    _vNF;
    get vNF() {
        return this._vNF;
    }

    set vNF(value: any) {
        TDec_1302(value);
        this._vNF = value
    }

    _vTotTrib;
    get vTotTrib() {
        return this._vTotTrib;
    }

    set vTotTrib(value: any) {
        TDec_1302(value);
        this._vTotTrib = value
    }
}

export class TNFe_InfNFe_Total_ISSQNtot {
    _vServ;
    get vServ() {
        return this._vServ;
    }

    set vServ(value: any) {
        TDec_1302Opc(value);
        this._vServ = value
    }

    _vBC;
    get vBC() {
        return this._vBC;
    }

    set vBC(value: any) {
        TDec_1302Opc(value);
        this._vBC = value
    }

    _vISS;
    get vISS() {
        return this._vISS;
    }

    set vISS(value: any) {
        TDec_1302Opc(value);
        this._vISS = value
    }

    _vPIS;
    get vPIS() {
        return this._vPIS;
    }

    set vPIS(value: any) {
        TDec_1302Opc(value);
        this._vPIS = value
    }

    _vCOFINS;
    get vCOFINS() {
        return this._vCOFINS;
    }

    set vCOFINS(value: any) {
        TDec_1302Opc(value);
        this._vCOFINS = value
    }

    _dCompet;
    get dCompet() {
        return this._dCompet;
    }

    set dCompet(value: any) {
        TData(value);
        this._dCompet = value
    }

    _vDeducao;
    get vDeducao() {
        return this._vDeducao;
    }

    set vDeducao(value: any) {
        TDec_1302Opc(value);
        this._vDeducao = value
    }

    _vOutro;
    get vOutro() {
        return this._vOutro;
    }

    set vOutro(value: any) {
        TDec_1302Opc(value);
        this._vOutro = value
    }

    _vDescIncond;
    get vDescIncond() {
        return this._vDescIncond;
    }

    set vDescIncond(value: any) {
        TDec_1302Opc(value);
        this._vDescIncond = value
    }

    _vDescCond;
    get vDescCond() {
        return this._vDescCond;
    }

    set vDescCond(value: any) {
        TDec_1302Opc(value);
        this._vDescCond = value
    }

    _vISSRet;
    get vISSRet() {
        return this._vISSRet;
    }

    set vISSRet(value: any) {
        TDec_1302Opc(value);
        this._vISSRet = value
    }

    _cRegTrib;
    get cRegTrib() {
        return this._cRegTrib;
    }

    set cRegTrib(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["1", "2", "3", "4", "5", "6"]});
        this._cRegTrib = value
    }
}

export class TNFe_InfNFe_Total_RetTrib {
    _vRetPIS;
    get vRetPIS() {
        return this._vRetPIS;
    }

    set vRetPIS(value: any) {
        TDec_1302Opc(value);
        this._vRetPIS = value
    }

    _vRetCOFINS;
    get vRetCOFINS() {
        return this._vRetCOFINS;
    }

    set vRetCOFINS(value: any) {
        TDec_1302Opc(value);
        this._vRetCOFINS = value
    }

    _vRetCSLL;
    get vRetCSLL() {
        return this._vRetCSLL;
    }

    set vRetCSLL(value: any) {
        TDec_1302Opc(value);
        this._vRetCSLL = value
    }

    _vBCIRRF;
    get vBCIRRF() {
        return this._vBCIRRF;
    }

    set vBCIRRF(value: any) {
        TDec_1302Opc(value);
        this._vBCIRRF = value
    }

    _vIRRF;
    get vIRRF() {
        return this._vIRRF;
    }

    set vIRRF(value: any) {
        TDec_1302Opc(value);
        this._vIRRF = value
    }

    _vBCRetPrev;
    get vBCRetPrev() {
        return this._vBCRetPrev;
    }

    set vBCRetPrev(value: any) {
        TDec_1302Opc(value);
        this._vBCRetPrev = value
    }

    _vRetPrev;
    get vRetPrev() {
        return this._vRetPrev;
    }

    set vRetPrev(value: any) {
        TDec_1302Opc(value);
        this._vRetPrev = value
    }
}

export class TNFe_InfNFe_Transp {
    _modFrete;
    get modFrete() {
        return this._modFrete;
    }

    set modFrete(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "4", "9"]});
        this._modFrete = value
    }

    _transporta;
    get transporta() {
        return this._transporta;
    }

    set transporta(value: TNFe_InfNFe_Transp_Transporta) {
        this._transporta = value
    }

    _retTransp;
    get retTransp() {
        return this._retTransp;
    }

    set retTransp(value: TNFe_InfNFe_Transp_RetTransp) {
        this._retTransp = value
    }

    _veicTransp;
    get veicTransp() {
        return this._veicTransp;
    }

    set veicTransp(value: any) {
        undefined
    }

    _reboque;
    get reboque() {
        return this._reboque;
    }

    set reboque(value: any) {
        undefined
    }

    _vagao;
    get vagao() {
        return this._vagao;
    }

    set vagao(value: any) {
        validate(value, {"minLength": "1", "maxLength": "20"});
        this._vagao = value
    }

    _balsa;
    get balsa() {
        return this._balsa;
    }

    set balsa(value: any) {
        validate(value, {"minLength": "1", "maxLength": "20"});
        this._balsa = value
    }

    _vol;
    get vol() {
        return this._vol;
    }

    set vol(value: TNFe_InfNFe_Transp_Vol) {
        this._vol = value
    }
}

export class TNFe_InfNFe_Transp_Transporta {
    _CNPJ;
    get CNPJ() {
        return this._CNPJ;
    }

    set CNPJ(value: any) {
        TCnpj(value);
        this._CNPJ = value
    }

    _CPF;
    get CPF() {
        return this._CPF;
    }

    set CPF(value: any) {
        TCpf(value);
        this._CPF = value
    }

    _xNome;
    get xNome() {
        return this._xNome;
    }

    set xNome(value: any) {
        validate(value, {"maxLength": "60", "minLength": "2"});
        this._xNome = value
    }

    _IE;
    get IE() {
        return this._IE;
    }

    set IE(value: any) {
        TIeDest(value);
        this._IE = value
    }

    _xEnder;
    get xEnder() {
        return this._xEnder;
    }

    set xEnder(value: any) {
        validate(value, {"minLength": "1", "maxLength": "60"});
        this._xEnder = value
    }

    _xMun;
    get xMun() {
        return this._xMun;
    }

    set xMun(value: any) {
        validate(value, {"maxLength": "60", "minLength": "1"});
        this._xMun = value
    }

    _UF;
    get UF() {
        return this._UF;
    }

    set UF(value: any) {
        TUf(value);
        this._UF = value
    }
}

export class TNFe_InfNFe_Transp_RetTransp {
    _vServ;
    get vServ() {
        return this._vServ;
    }

    set vServ(value: any) {
        TDec_1302(value);
        this._vServ = value
    }

    _vBCRet;
    get vBCRet() {
        return this._vBCRet;
    }

    set vBCRet(value: any) {
        TDec_1302(value);
        this._vBCRet = value
    }

    _pICMSRet;
    get pICMSRet() {
        return this._pICMSRet;
    }

    set pICMSRet(value: any) {
        TDec_0302a04(value);
        this._pICMSRet = value
    }

    _vICMSRet;
    get vICMSRet() {
        return this._vICMSRet;
    }

    set vICMSRet(value: any) {
        TDec_1302(value);
        this._vICMSRet = value
    }

    _CFOP;
    get CFOP() {
        return this._CFOP;
    }

    set CFOP(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[1,2,3,5,6,7]{1}[0-9]{3}"});
        this._CFOP = value
    }

    _cMunFG;
    get cMunFG() {
        return this._cMunFG;
    }

    set cMunFG(value: any) {
        TCodMunIBGE(value);
        this._cMunFG = value
    }
}

export class TNFe_InfNFe_Transp_Vol {
    _qVol;
    get qVol() {
        return this._qVol;
    }

    set qVol(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{1,15}"});
        this._qVol = value
    }

    _esp;
    get esp() {
        return this._esp;
    }

    set esp(value: any) {
        validate(value, {"minLength": "1", "maxLength": "60"});
        this._esp = value
    }

    _marca;
    get marca() {
        return this._marca;
    }

    set marca(value: any) {
        validate(value, {"minLength": "1", "maxLength": "60"});
        this._marca = value
    }

    _nVol;
    get nVol() {
        return this._nVol;
    }

    set nVol(value: any) {
        validate(value, {"minLength": "1", "maxLength": "60"});
        this._nVol = value
    }

    _pesoL;
    get pesoL() {
        return this._pesoL;
    }

    set pesoL(value: any) {
        TDec_1203(value);
        this._pesoL = value
    }

    _pesoB;
    get pesoB() {
        return this._pesoB;
    }

    set pesoB(value: any) {
        TDec_1203(value);
        this._pesoB = value
    }

    _lacres;
    get lacres() {
        return this._lacres;
    }

    set lacres(value: TNFe_InfNFe_Transp_Vol_Lacres) {
        this._lacres = value
    }
}

export class TNFe_InfNFe_Transp_Vol_Lacres {
    _nLacre;
    get nLacre() {
        return this._nLacre;
    }

    set nLacre(value: any) {
        validate(value, {"minLength": "1", "maxLength": "60"});
        this._nLacre = value
    }
}

export class TNFe_InfNFe_Cobr {
    _fat;
    get fat() {
        return this._fat;
    }

    set fat(value: TNFe_InfNFe_Cobr_Fat) {
        this._fat = value
    }

    _dup;
    get dup() {
        return this._dup;
    }

    set dup(value: TNFe_InfNFe_Cobr_Dup) {
        this._dup = value
    }
}

export class TNFe_InfNFe_Cobr_Fat {
    _nFat;
    get nFat() {
        return this._nFat;
    }

    set nFat(value: any) {
        validate(value, {"minLength": "1", "maxLength": "60"});
        this._nFat = value
    }

    _vOrig;
    get vOrig() {
        return this._vOrig;
    }

    set vOrig(value: any) {
        TDec_1302Opc(value);
        this._vOrig = value
    }

    _vDesc;
    get vDesc() {
        return this._vDesc;
    }

    set vDesc(value: any) {
        TDec_1302Opc(value);
        this._vDesc = value
    }

    _vLiq;
    get vLiq() {
        return this._vLiq;
    }

    set vLiq(value: any) {
        TDec_1302Opc(value);
        this._vLiq = value
    }
}

export class TNFe_InfNFe_Cobr_Dup {
    _nDup;
    get nDup() {
        return this._nDup;
    }

    set nDup(value: any) {
        validate(value, {"maxLength": "60", "minLength": "1"});
        this._nDup = value
    }

    _dVenc;
    get dVenc() {
        return this._dVenc;
    }

    set dVenc(value: any) {
        TData(value);
        this._dVenc = value
    }

    _vDup;
    get vDup() {
        return this._vDup;
    }

    set vDup(value: any) {
        TDec_1302Opc(value);
        this._vDup = value
    }
}

export class TNFe_InfNFe_Pag {
    _detPag;
    get detPag() {
        return this._detPag;
    }

    set detPag(value: TNFe_InfNFe_Pag_DetPag) {
        this._detPag = value
    }

    _vTroco;
    get vTroco() {
        return this._vTroco;
    }

    set vTroco(value: any) {
        TDec_1302(value);
        this._vTroco = value
    }
}

export class TNFe_InfNFe_Pag_DetPag {
    _indPag;
    get indPag() {
        return this._indPag;
    }

    set indPag(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1"]});
        this._indPag = value
    }

    _tPag;
    get tPag() {
        return this._tPag;
    }

    set tPag(value: any) {
        validate(value, {
            "whiteSpace": "preserve",
            "enumeration": ["01", "02", "03", "04", "05", "10", "11", "12", "13", "14", "15", "90", "99"]
        });
        this._tPag = value
    }

    _vPag;
    get vPag() {
        return this._vPag;
    }

    set vPag(value: any) {
        TDec_1302(value);
        this._vPag = value
    }

    _card;
    get card() {
        return this._card;
    }

    set card(value: TNFe_InfNFe_Pag_DetPag_Card) {
        this._card = value
    }
}

export class TNFe_InfNFe_Pag_DetPag_Card {
    _tpIntegra;
    get tpIntegra() {
        return this._tpIntegra;
    }

    set tpIntegra(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["1", "2"]});
        this._tpIntegra = value
    }

    _CNPJ;
    get CNPJ() {
        return this._CNPJ;
    }

    set CNPJ(value: any) {
        TCnpj(value);
        this._CNPJ = value
    }

    _tBand;
    get tBand() {
        return this._tBand;
    }

    set tBand(value: any) {
        validate(value, {
            "whiteSpace": "preserve",
            "enumeration": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "99"]
        });
        this._tBand = value
    }

    _cAut;
    get cAut() {
        return this._cAut;
    }

    set cAut(value: any) {
        validate(value, {"minLength": "1", "maxLength": "20"});
        this._cAut = value
    }
}

export class TNFe_InfNFe_InfAdic {
    _infAdFisco;
    get infAdFisco() {
        return this._infAdFisco;
    }

    set infAdFisco(value: any) {
        validate(value, {"maxLength": "2000", "minLength": "1"});
        this._infAdFisco = value
    }

    _infCpl;
    get infCpl() {
        return this._infCpl;
    }

    set infCpl(value: any) {
        validate(value, {"maxLength": "5000", "minLength": "1"});
        this._infCpl = value
    }

    _obsCont;
    get obsCont() {
        return this._obsCont;
    }

    set obsCont(value: TNFe_InfNFe_InfAdic_ObsCont) {
        this._obsCont = value
    }

    _obsFisco;
    get obsFisco() {
        return this._obsFisco;
    }

    set obsFisco(value: TNFe_InfNFe_InfAdic_ObsFisco) {
        this._obsFisco = value
    }

    _procRef;
    get procRef() {
        return this._procRef;
    }

    set procRef(value: TNFe_InfNFe_InfAdic_ProcRef) {
        this._procRef = value
    }
}

export class TNFe_InfNFe_InfAdic_ObsCont {
    _xTexto;
    get xTexto() {
        return this._xTexto;
    }

    set xTexto(value: any) {
        validate(value, {"minLength": "1", "maxLength": "60"});
        this._xTexto = value
    }

    _xCampo;
    get xCampo() {
        return this._xCampo;
    }

    set xCampo(value: any) {
        validate(value, {"minLength": "1", "maxLength": "20"});
        this._xCampo = value
    }
}

export class TNFe_InfNFe_InfAdic_ObsFisco {
    _xTexto;
    get xTexto() {
        return this._xTexto;
    }

    set xTexto(value: any) {
        validate(value, {"minLength": "1", "maxLength": "60"});
        this._xTexto = value
    }

    _xCampo;
    get xCampo() {
        return this._xCampo;
    }

    set xCampo(value: any) {
        validate(value, {"minLength": "1", "maxLength": "20"});
        this._xCampo = value
    }
}

export class TNFe_InfNFe_InfAdic_ProcRef {
    _nProc;
    get nProc() {
        return this._nProc;
    }

    set nProc(value: any) {
        validate(value, {"minLength": "1", "maxLength": "60"});
        this._nProc = value
    }

    _indProc;
    get indProc() {
        return this._indProc;
    }

    set indProc(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1", "2", "3", "9"]});
        this._indProc = value
    }
}

export class TNFe_InfNFe_Exporta {
    _UFSaidaPais;
    get UFSaidaPais() {
        return this._UFSaidaPais;
    }

    set UFSaidaPais(value: any) {
        TUfEmi(value);
        this._UFSaidaPais = value
    }

    _xLocExporta;
    get xLocExporta() {
        return this._xLocExporta;
    }

    set xLocExporta(value: any) {
        validate(value, {"minLength": "1", "maxLength": "60"});
        this._xLocExporta = value
    }

    _xLocDespacho;
    get xLocDespacho() {
        return this._xLocDespacho;
    }

    set xLocDespacho(value: any) {
        validate(value, {"minLength": "1", "maxLength": "60"});
        this._xLocDespacho = value
    }
}

export class TNFe_InfNFe_Compra {
    _xNEmp;
    get xNEmp() {
        return this._xNEmp;
    }

    set xNEmp(value: any) {
        validate(value, {"minLength": "1", "maxLength": "22"});
        this._xNEmp = value
    }

    _xPed;
    get xPed() {
        return this._xPed;
    }

    set xPed(value: any) {
        validate(value, {"minLength": "1", "maxLength": "60"});
        this._xPed = value
    }

    _xCont;
    get xCont() {
        return this._xCont;
    }

    set xCont(value: any) {
        validate(value, {"minLength": "1", "maxLength": "60"});
        this._xCont = value
    }
}

export class TNFe_InfNFe_Cana {
    _safra;
    get safra() {
        return this._safra;
    }

    set safra(value: any) {
        validate(value, {"minLength": "4", "maxLength": "9"});
        this._safra = value
    }

    _ref;
    get ref() {
        return this._ref;
    }

    set ref(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "(0[1-9]|1[0-2])([/][2][0-9][0-9][0-9])"});
        this._ref = value
    }

    _forDia;
    get forDia() {
        return this._forDia;
    }

    set forDia(value: TNFe_InfNFe_Cana_ForDia) {
        this._forDia = value
    }

    _qTotMes;
    get qTotMes() {
        return this._qTotMes;
    }

    set qTotMes(value: any) {
        TDec_1110v(value);
        this._qTotMes = value
    }

    _qTotAnt;
    get qTotAnt() {
        return this._qTotAnt;
    }

    set qTotAnt(value: any) {
        TDec_1110v(value);
        this._qTotAnt = value
    }

    _qTotGer;
    get qTotGer() {
        return this._qTotGer;
    }

    set qTotGer(value: any) {
        TDec_1110v(value);
        this._qTotGer = value
    }

    _deduc;
    get deduc() {
        return this._deduc;
    }

    set deduc(value: TNFe_InfNFe_Cana_Deduc) {
        this._deduc = value
    }

    _vFor;
    get vFor() {
        return this._vFor;
    }

    set vFor(value: any) {
        TDec_1302(value);
        this._vFor = value
    }

    _vTotDed;
    get vTotDed() {
        return this._vTotDed;
    }

    set vTotDed(value: any) {
        TDec_1302(value);
        this._vTotDed = value
    }

    _vLiqFor;
    get vLiqFor() {
        return this._vLiqFor;
    }

    set vLiqFor(value: any) {
        TDec_1302(value);
        this._vLiqFor = value
    }
}

export class TNFe_InfNFe_Cana_ForDia {
    _qtde;
    get qtde() {
        return this._qtde;
    }

    set qtde(value: any) {
        TDec_1110v(value);
        this._qtde = value
    }

    _dia;
    get dia() {
        return this._dia;
    }

    set dia(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[1-9]|[1][0-9]|[2][0-9]|[3][0-1]"});
        this._dia = value
    }
}

export class TNFe_InfNFe_Cana_Deduc {
    _xDed;
    get xDed() {
        return this._xDed;
    }

    set xDed(value: any) {
        validate(value, {"minLength": "1", "maxLength": "60"});
        this._xDed = value
    }

    _vDed;
    get vDed() {
        return this._vDed;
    }

    set vDed(value: any) {
        TDec_1302(value);
        this._vDed = value
    }
}

export class TNFe_InfNFeSupl {
    _qrCode;
    get qrCode() {
        return this._qrCode;
    }

    set qrCode(value: any) {
        validate(value, {
            "whiteSpace": "preserve",
            "minLength": "100",
            "maxLength": "600",
            "pattern": "(((HTTPS?|https?)://.*\\?chNFe=[0-9]{44}&amp;nVersao=[0-9]{3}&amp;tpAmb=[1-2](&amp;cDest=([A-Za-z0-9.:+-/)(]{0}|[A-Za-z0-9.:+-/)(]{5,20})?)?&amp;dhEmi=[A-Fa-f0-9]{50}&amp;vNF=(0|0\\.[0-9]{2}|[1-9]{1}[0-9]{0,12}(\\.[0-9]{2})?)&amp;vICMS=(0|0\\.[0-9]{2}|[1-9]{1}[0-9]{0,12}(\\.[0-9]{2})?)&amp;digVal=[A-Fa-f0-9]{56}&amp;cIdToken=[0-9]{6}&amp;cHashQRCode=[A-Fa-f0-9]{40})|((HTTPS?|https?)://.*\\?p=[0-9]{44}\\|[2]\\|[1-2]\\|(([0]{1}[1-9]{1}|[1-2]{1}[0-9]{1}|[3]{1}[0-1]{1})\\|(0|0\\.[0-9]{2}|[1-9]{1}[0-9]{0,12}(\\.[0-9]{2})?)\\|[A-Fa-f0-9]{56}\\|)?(0|[1-9]{1}([0-9]{1,5})?)\\|[A-Fa-f0-9]{40}))"
        });
        this._qrCode = value
    }

    _urlChave;
    get urlChave() {
        return this._urlChave;
    }

    set urlChave(value: any) {
        validate(value, {"minLength": "21", "maxLength": "85"});
        this._urlChave = value
    }
}

export class TProtNFe {
    _infProt;
    get infProt() {
        return this._infProt;
    }

    set infProt(value: TProtNFe_InfProt) {
        this._infProt = value
    }

    _undefined;
    get undefined() {
        return this._undefined;
    }

    set undefined(value: any) {
        undefined
    }

    _versao;
    get versao() {
        return this._versao;
    }

    set versao(value: any) {
        undefined
    }
}

export class TProtNFe_InfProt {
    _tpAmb;
    get tpAmb() {
        return this._tpAmb;
    }

    set tpAmb(value: any) {
        TAmb(value);
        this._tpAmb = value
    }

    _verAplic;
    get verAplic() {
        return this._verAplic;
    }

    set verAplic(value: any) {
        TVerAplic(value);
        this._verAplic = value
    }

    _chNFe;
    get chNFe() {
        return this._chNFe;
    }

    set chNFe(value: any) {
        TChNFe(value);
        this._chNFe = value
    }

    _dhRecbto;
    get dhRecbto() {
        return this._dhRecbto;
    }

    set dhRecbto(value: any) {
        TDateTimeUTC(value);
        this._dhRecbto = value
    }

    _nProt;
    get nProt() {
        return this._nProt;
    }

    set nProt(value: any) {
        TProt(value);
        this._nProt = value
    }

    _digVal;
    get digVal() {
        return this._digVal;
    }

    set digVal(value: any) {
        undefined
    }

    _cStat;
    get cStat() {
        return this._cStat;
    }

    set cStat(value: any) {
        TStat(value);
        this._cStat = value
    }

    _xMotivo;
    get xMotivo() {
        return this._xMotivo;
    }

    set xMotivo(value: any) {
        TMotivo(value);
        this._xMotivo = value
    }

    _Id;
    get Id() {
        return this._Id;
    }

    set Id(value: any) {
        undefined
    }
}

export class TEnviNFe {
    _idLote;
    get idLote() {
        return this._idLote;
    }

    set idLote(value: any) {
        TIdLote(value);
        this._idLote = value
    }

    _indSinc;
    get indSinc() {
        return this._indSinc;
    }

    set indSinc(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["0", "1"]});
        this._indSinc = value
    }

    _NFe;
    get NFe() {
        return this._NFe;
    }

    set NFe(value: TNFe) {
        undefined
    }

    _versao;
    get versao() {
        return this._versao;
    }

    set versao(value: any) {
        undefined
    }
}

export class TRetEnviNFe {
    _tpAmb;
    get tpAmb() {
        return this._tpAmb;
    }

    set tpAmb(value: any) {
        TAmb(value);
        this._tpAmb = value
    }

    _verAplic;
    get verAplic() {
        return this._verAplic;
    }

    set verAplic(value: any) {
        TVerAplic(value);
        this._verAplic = value
    }

    _cStat;
    get cStat() {
        return this._cStat;
    }

    set cStat(value: any) {
        TStat(value);
        this._cStat = value
    }

    _xMotivo;
    get xMotivo() {
        return this._xMotivo;
    }

    set xMotivo(value: any) {
        TMotivo(value);
        this._xMotivo = value
    }

    _cUF;
    get cUF() {
        return this._cUF;
    }

    set cUF(value: any) {
        TCodUfIBGE(value);
        this._cUF = value
    }

    _dhRecbto;
    get dhRecbto() {
        return this._dhRecbto;
    }

    set dhRecbto(value: any) {
        TDateTimeUTC(value);
        this._dhRecbto = value
    }

    _infRec;
    get infRec() {
        return this._infRec;
    }

    set infRec(value: TRetEnviNFe_InfRec) {
        this._infRec = value
    }

    _protNFe;
    get protNFe() {
        return this._protNFe;
    }

    set protNFe(value: TProtNFe) {
        undefined
    }

    _versao;
    get versao() {
        return this._versao;
    }

    set versao(value: any) {
        undefined
    }
}

export class TRetEnviNFe_InfRec {
    _nRec;
    get nRec() {
        return this._nRec;
    }

    set nRec(value: any) {
        TRec(value);
        this._nRec = value
    }

    _tMed;
    get tMed() {
        return this._tMed;
    }

    set tMed(value: any) {
        TMed(value);
        this._tMed = value
    }
}

export class TConsReciNFe {
    _tpAmb;
    get tpAmb() {
        return this._tpAmb;
    }

    set tpAmb(value: any) {
        TAmb(value);
        this._tpAmb = value
    }

    _nRec;
    get nRec() {
        return this._nRec;
    }

    set nRec(value: any) {
        TRec(value);
        this._nRec = value
    }

    _versao;
    get versao() {
        return this._versao;
    }

    set versao(value: any) {
        undefined
    }
}

export class TRetConsReciNFe {
    _tpAmb;
    get tpAmb() {
        return this._tpAmb;
    }

    set tpAmb(value: any) {
        TAmb(value);
        this._tpAmb = value
    }

    _verAplic;
    get verAplic() {
        return this._verAplic;
    }

    set verAplic(value: any) {
        TVerAplic(value);
        this._verAplic = value
    }

    _nRec;
    get nRec() {
        return this._nRec;
    }

    set nRec(value: any) {
        TRec(value);
        this._nRec = value
    }

    _cStat;
    get cStat() {
        return this._cStat;
    }

    set cStat(value: any) {
        TStat(value);
        this._cStat = value
    }

    _xMotivo;
    get xMotivo() {
        return this._xMotivo;
    }

    set xMotivo(value: any) {
        TMotivo(value);
        this._xMotivo = value
    }

    _cUF;
    get cUF() {
        return this._cUF;
    }

    set cUF(value: any) {
        TCodUfIBGE(value);
        this._cUF = value
    }

    _dhRecbto;
    get dhRecbto() {
        return this._dhRecbto;
    }

    set dhRecbto(value: any) {
        TDateTimeUTC(value);
        this._dhRecbto = value
    }

    _cMsg;
    get cMsg() {
        return this._cMsg;
    }

    set cMsg(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{1,4}"});
        this._cMsg = value
    }

    _xMsg;
    get xMsg() {
        return this._xMsg;
    }

    set xMsg(value: any) {
        validate(value, {"minLength": "1", "maxLength": "200"});
        this._xMsg = value
    }

    _protNFe;
    get protNFe() {
        return this._protNFe;
    }

    set protNFe(value: TProtNFe) {
        undefined
    }

    _versao;
    get versao() {
        return this._versao;
    }

    set versao(value: any) {
        undefined
    }
}

export class TNfeProc {
    _NFe;
    get NFe() {
        return this._NFe;
    }

    set NFe(value: TNFe) {
        undefined
    }

    _protNFe;
    get protNFe() {
        return this._protNFe;
    }

    set protNFe(value: TProtNFe) {
        undefined
    }

    _versao;
    get versao() {
        return this._versao;
    }

    set versao(value: any) {
        undefined
    }
}

export class TEndereco {
    _xLgr;
    get xLgr() {
        return this._xLgr;
    }

    set xLgr(value: any) {
        validate(value, {"maxLength": "60", "minLength": "2"});
        this._xLgr = value
    }

    _nro;
    get nro() {
        return this._nro;
    }

    set nro(value: any) {
        validate(value, {"maxLength": "60", "minLength": "1"});
        this._nro = value
    }

    _xCpl;
    get xCpl() {
        return this._xCpl;
    }

    set xCpl(value: any) {
        validate(value, {"maxLength": "60", "minLength": "1"});
        this._xCpl = value
    }

    _xBairro;
    get xBairro() {
        return this._xBairro;
    }

    set xBairro(value: any) {
        validate(value, {"maxLength": "60", "minLength": "2"});
        this._xBairro = value
    }

    _cMun;
    get cMun() {
        return this._cMun;
    }

    set cMun(value: any) {
        TCodMunIBGE(value);
        this._cMun = value
    }

    _xMun;
    get xMun() {
        return this._xMun;
    }

    set xMun(value: any) {
        validate(value, {"maxLength": "60", "minLength": "2"});
        this._xMun = value
    }

    _UF;
    get UF() {
        return this._UF;
    }

    set UF(value: any) {
        TUf(value);
        this._UF = value
    }

    _CEP;
    get CEP() {
        return this._CEP;
    }

    set CEP(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{8}"});
        this._CEP = value
    }

    _cPais;
    get cPais() {
        return this._cPais;
    }

    set cPais(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{1,4}"});
        this._cPais = value
    }

    _xPais;
    get xPais() {
        return this._xPais;
    }

    set xPais(value: any) {
        validate(value, {"maxLength": "60", "minLength": "2"});
        this._xPais = value
    }

    _fone;
    get fone() {
        return this._fone;
    }

    set fone(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{6,14}"});
        this._fone = value
    }
}

export class TEnderEmi {
    _xLgr;
    get xLgr() {
        return this._xLgr;
    }

    set xLgr(value: any) {
        validate(value, {"maxLength": "60", "minLength": "2"});
        this._xLgr = value
    }

    _nro;
    get nro() {
        return this._nro;
    }

    set nro(value: any) {
        validate(value, {"maxLength": "60", "minLength": "1"});
        this._nro = value
    }

    _xCpl;
    get xCpl() {
        return this._xCpl;
    }

    set xCpl(value: any) {
        validate(value, {"maxLength": "60", "minLength": "1"});
        this._xCpl = value
    }

    _xBairro;
    get xBairro() {
        return this._xBairro;
    }

    set xBairro(value: any) {
        validate(value, {"maxLength": "60", "minLength": "2"});
        this._xBairro = value
    }

    _cMun;
    get cMun() {
        return this._cMun;
    }

    set cMun(value: any) {
        TCodMunIBGE(value);
        this._cMun = value
    }

    _xMun;
    get xMun() {
        return this._xMun;
    }

    set xMun(value: any) {
        validate(value, {"maxLength": "60", "minLength": "2"});
        this._xMun = value
    }

    _UF;
    get UF() {
        return this._UF;
    }

    set UF(value: any) {
        TUfEmi(value);
        this._UF = value
    }

    _CEP;
    get CEP() {
        return this._CEP;
    }

    set CEP(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{8}"});
        this._CEP = value
    }

    _cPais;
    get cPais() {
        return this._cPais;
    }

    set cPais(value: any) {
        validate(value, {"enumeration": ["1058"]});
        this._cPais = value
    }

    _xPais;
    get xPais() {
        return this._xPais;
    }

    set xPais(value: any) {
        validate(value, {"enumeration": ["Brasil", "BRASIL"]});
        this._xPais = value
    }

    _fone;
    get fone() {
        return this._fone;
    }

    set fone(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{6,14}"});
        this._fone = value
    }
}

export class TLocal {
    _CNPJ;
    get CNPJ() {
        return this._CNPJ;
    }

    set CNPJ(value: any) {
        TCnpjOpc(value);
        this._CNPJ = value
    }

    _CPF;
    get CPF() {
        return this._CPF;
    }

    set CPF(value: any) {
        TCpf(value);
        this._CPF = value
    }

    _xLgr;
    get xLgr() {
        return this._xLgr;
    }

    set xLgr(value: any) {
        validate(value, {"maxLength": "60", "minLength": "2"});
        this._xLgr = value
    }

    _nro;
    get nro() {
        return this._nro;
    }

    set nro(value: any) {
        validate(value, {"maxLength": "60", "minLength": "1"});
        this._nro = value
    }

    _xCpl;
    get xCpl() {
        return this._xCpl;
    }

    set xCpl(value: any) {
        validate(value, {"maxLength": "60", "minLength": "1"});
        this._xCpl = value
    }

    _xBairro;
    get xBairro() {
        return this._xBairro;
    }

    set xBairro(value: any) {
        validate(value, {"maxLength": "60", "minLength": "2"});
        this._xBairro = value
    }

    _cMun;
    get cMun() {
        return this._cMun;
    }

    set cMun(value: any) {
        TCodMunIBGE(value);
        this._cMun = value
    }

    _xMun;
    get xMun() {
        return this._xMun;
    }

    set xMun(value: any) {
        validate(value, {"maxLength": "60", "minLength": "2"});
        this._xMun = value
    }

    _UF;
    get UF() {
        return this._UF;
    }

    set UF(value: any) {
        TUf(value);
        this._UF = value
    }
}

export class TVeiculo {
    _placa;
    get placa() {
        return this._placa;
    }

    set placa(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[A-Z]{2,3}[0-9]{4}|[A-Z]{3,4}[0-9]{3}"});
        this._placa = value
    }

    _UF;
    get UF() {
        return this._UF;
    }

    set UF(value: any) {
        TUf(value);
        this._UF = value
    }

    _RNTC;
    get RNTC() {
        return this._RNTC;
    }

    set RNTC(value: any) {
        validate(value, {"minLength": "1", "maxLength": "20"});
        this._RNTC = value
    }
}

export class TIpi {
    _CNPJProd;
    get CNPJProd() {
        return this._CNPJProd;
    }

    set CNPJProd(value: any) {
        TCnpj(value);
        this._CNPJProd = value
    }

    _cSelo;
    get cSelo() {
        return this._cSelo;
    }

    set cSelo(value: any) {
        validate(value, {"minLength": "1", "maxLength": "60"});
        this._cSelo = value
    }

    _qSelo;
    get qSelo() {
        return this._qSelo;
    }

    set qSelo(value: any) {
        validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{1,12}"});
        this._qSelo = value
    }

    _cEnq;
    get cEnq() {
        return this._cEnq;
    }

    set cEnq(value: any) {
        validate(value, {"minLength": "1", "maxLength": "3"});
        this._cEnq = value
    }

    _IPITrib;
    get IPITrib() {
        return this._IPITrib;
    }

    set IPITrib(value: TIpi_IPITrib) {
        this._IPITrib = value
    }

    _IPINT;
    get IPINT() {
        return this._IPINT;
    }

    set IPINT(value: TIpi_IPINT) {
        this._IPINT = value
    }
}

export class TIpi_IPITrib {
    _CST;
    get CST() {
        return this._CST;
    }

    set CST(value: any) {
        validate(value, {"whiteSpace": "preserve", "enumeration": ["00", "49", "50", "99"]});
        this._CST = value
    }

    _vBC;
    get vBC() {
        return this._vBC;
    }

    set vBC(value: any) {
        TDec_1302(value);
        this._vBC = value
    }

    _pIPI;
    get pIPI() {
        return this._pIPI;
    }

    set pIPI(value: any) {
        TDec_0302a04(value);
        this._pIPI = value
    }

    _qUnid;
    get qUnid() {
        return this._qUnid;
    }

    set qUnid(value: any) {
        TDec_1204v(value);
        this._qUnid = value
    }

    _vUnid;
    get vUnid() {
        return this._vUnid;
    }

    set vUnid(value: any) {
        TDec_1104(value);
        this._vUnid = value
    }

    _vIPI;
    get vIPI() {
        return this._vIPI;
    }

    set vIPI(value: any) {
        TDec_1302(value);
        this._vIPI = value
    }
}

export class TIpi_IPINT {
    _CST;
    get CST() {
        return this._CST;
    }

    set CST(value: any) {
        validate(value, {
            "whiteSpace": "preserve",
            "enumeration": ["01", "02", "03", "04", "05", "51", "52", "53", "54", "55"]
        });
        this._CST = value
    }
}