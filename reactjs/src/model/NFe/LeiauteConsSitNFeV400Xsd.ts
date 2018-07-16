import {TAmb,TChNFe,TVerAplic,TStat,TMotivo,TCodUfIBGE,TDateTimeUTC,TProt,TCOrgaoIBGE,TCnpjOpc,TCpf} from "./TiposBasicoV400Xsd";
import { validate } from "../../Model" ; /* --------
  This is a generated file. All edits will be overwritten! 
-------- */

export const TVerNFe = function ( value : any ) { validate(value,{"pattern":"[1-9]{1}\\.[0-9]{2}"}); } 
export const TVerCancNFe = function ( value : any ) { validate(value,{"pattern":"[1-9]{1}\\.[0-9]{2}"}); } 
export const TVerEvento = function ( value : any ) { validate(value,{"pattern":"[1-9]{1}\\.[0-9]{2}"}); } 
export const TRetVerEvento = function ( value : any ) { validate(value,{"pattern":"[1-9]{1}\\.[0-9]{2}"}); } 
export const TVerConsSitNFe = function ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["4.00"]}); } export class TConsSitNFe { _tpAmb ; get tpAmb ( ) { return this._tpAmb; } set tpAmb ( value : any ) { TAmb(value);
this._tpAmb=value
 } _xServ ; get xServ ( ) { return this._xServ; } set xServ ( value : any ) { validate(value,{"enumeration":["CONSULTAR"]});
this._xServ=value } _chNFe ; get chNFe ( ) { return this._chNFe; } set chNFe ( value : any ) { TChNFe(value);
this._chNFe=value
 } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class TRetConsSitNFe { _tpAmb ; get tpAmb ( ) { return this._tpAmb; } set tpAmb ( value : any ) { TAmb(value);
this._tpAmb=value
 } _verAplic ; get verAplic ( ) { return this._verAplic; } set verAplic ( value : any ) { TVerAplic(value);
this._verAplic=value
 } _cStat ; get cStat ( ) { return this._cStat; } set cStat ( value : any ) { TStat(value);
this._cStat=value
 } _xMotivo ; get xMotivo ( ) { return this._xMotivo; } set xMotivo ( value : any ) { TMotivo(value);
this._xMotivo=value
 } _cUF ; get cUF ( ) { return this._cUF; } set cUF ( value : any ) { TCodUfIBGE(value);
this._cUF=value
 } _dhRecbto ; get dhRecbto ( ) { return this._dhRecbto; } set dhRecbto ( value : any ) { TDateTimeUTC(value);
this._dhRecbto=value
 } _chNFe ; get chNFe ( ) { return this._chNFe; } set chNFe ( value : any ) { TChNFe(value);
this._chNFe=value
 } _protNFe ; get protNFe ( ) { return this._protNFe; } set protNFe ( value : any ) { undefined } _retCancNFe ; get retCancNFe ( ) { return this._retCancNFe; } set retCancNFe ( value : any ) { undefined } _procEventoNFe ; get procEventoNFe ( ) { return this._procEventoNFe; } set procEventoNFe ( value : any ) { undefined } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class TProtNFe { _infProt ; get infProt ( ) { return this._infProt; } set infProt ( value : TProtNFe_InfProt ) { this._infProt=value } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class TProtNFe_InfProt { _tpAmb ; get tpAmb ( ) { return this._tpAmb; } set tpAmb ( value : any ) { TAmb(value);
this._tpAmb=value
 } _verAplic ; get verAplic ( ) { return this._verAplic; } set verAplic ( value : any ) { TVerAplic(value);
this._verAplic=value
 } _chNFe ; get chNFe ( ) { return this._chNFe; } set chNFe ( value : any ) { TChNFe(value);
this._chNFe=value
 } _dhRecbto ; get dhRecbto ( ) { return this._dhRecbto; } set dhRecbto ( value : any ) { undefined } _nProt ; get nProt ( ) { return this._nProt; } set nProt ( value : any ) { TProt(value);
this._nProt=value
 } _digVal ; get digVal ( ) { return this._digVal; } set digVal ( value : any ) { undefined } _cStat ; get cStat ( ) { return this._cStat; } set cStat ( value : any ) { TStat(value);
this._cStat=value
 } _xMotivo ; get xMotivo ( ) { return this._xMotivo; } set xMotivo ( value : any ) { TMotivo(value);
this._xMotivo=value
 } _Id ; get Id ( ) { return this._Id; } set Id ( value : any ) { undefined } } export class TRetCancNFe { _infCanc ; get infCanc ( ) { return this._infCanc; } set infCanc ( value : TRetCancNFe_InfCanc ) { this._infCanc=value } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class TRetCancNFe_InfCanc { _tpAmb ; get tpAmb ( ) { return this._tpAmb; } set tpAmb ( value : any ) { TAmb(value);
this._tpAmb=value
 } _verAplic ; get verAplic ( ) { return this._verAplic; } set verAplic ( value : any ) { TVerAplic(value);
this._verAplic=value
 } _cStat ; get cStat ( ) { return this._cStat; } set cStat ( value : any ) { TStat(value);
this._cStat=value
 } _xMotivo ; get xMotivo ( ) { return this._xMotivo; } set xMotivo ( value : any ) { TMotivo(value);
this._xMotivo=value
 } _cUF ; get cUF ( ) { return this._cUF; } set cUF ( value : any ) { TCodUfIBGE(value);
this._cUF=value
 } _chNFe ; get chNFe ( ) { return this._chNFe; } set chNFe ( value : any ) { TChNFe(value);
this._chNFe=value
 } _dhRecbto ; get dhRecbto ( ) { return this._dhRecbto; } set dhRecbto ( value : any ) { undefined } _nProt ; get nProt ( ) { return this._nProt; } set nProt ( value : any ) { TProt(value);
this._nProt=value
 } _Id ; get Id ( ) { return this._Id; } set Id ( value : any ) { undefined } } export class TEvento { _infEvento ; get infEvento ( ) { return this._infEvento; } set infEvento ( value : TEvento_InfEvento ) { this._infEvento=value } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class TEvento_InfEvento { _cOrgao ; get cOrgao ( ) { return this._cOrgao; } set cOrgao ( value : any ) { TCOrgaoIBGE(value);
this._cOrgao=value
 } _tpAmb ; get tpAmb ( ) { return this._tpAmb; } set tpAmb ( value : any ) { TAmb(value);
this._tpAmb=value
 } _CNPJ ; get CNPJ ( ) { return this._CNPJ; } set CNPJ ( value : any ) { TCnpjOpc(value);
this._CNPJ=value
 } _CPF ; get CPF ( ) { return this._CPF; } set CPF ( value : any ) { TCpf(value);
this._CPF=value
 } _chNFe ; get chNFe ( ) { return this._chNFe; } set chNFe ( value : any ) { TChNFe(value);
this._chNFe=value
 } _dhEvento ; get dhEvento ( ) { return this._dhEvento; } set dhEvento ( value : any ) { TDateTimeUTC(value);
this._dhEvento=value
 } _tpEvento ; get tpEvento ( ) { return this._tpEvento; } set tpEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{6}"});
this._tpEvento=value } _nSeqEvento ; get nSeqEvento ( ) { return this._nSeqEvento; } set nSeqEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[1-9][0-9]{0,1}"});
this._nSeqEvento=value } _verEvento ; get verEvento ( ) { return this._verEvento; } set verEvento ( value : any ) { validate(value,{"whiteSpace":"preserve"});
this._verEvento=value } _detEvento ; get detEvento ( ) { return this._detEvento; } set detEvento ( value : TEvento_InfEvento_DetEvento ) { this._detEvento=value } _Id ; get Id ( ) { return this._Id; } set Id ( value : any ) { validate(value,{"pattern":"ID[0-9]{52}"});
this._Id=value } } export class TEvento_InfEvento_DetEvento { } export class TRetEvento { _infEvento ; get infEvento ( ) { return this._infEvento; } set infEvento ( value : TRetEvento_InfEvento ) { this._infEvento=value } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class TRetEvento_InfEvento { _tpAmb ; get tpAmb ( ) { return this._tpAmb; } set tpAmb ( value : any ) { TAmb(value);
this._tpAmb=value
 } _verAplic ; get verAplic ( ) { return this._verAplic; } set verAplic ( value : any ) { TVerAplic(value);
this._verAplic=value
 } _cOrgao ; get cOrgao ( ) { return this._cOrgao; } set cOrgao ( value : any ) { TCOrgaoIBGE(value);
this._cOrgao=value
 } _cStat ; get cStat ( ) { return this._cStat; } set cStat ( value : any ) { TStat(value);
this._cStat=value
 } _xMotivo ; get xMotivo ( ) { return this._xMotivo; } set xMotivo ( value : any ) { TMotivo(value);
this._xMotivo=value
 } _chNFe ; get chNFe ( ) { return this._chNFe; } set chNFe ( value : any ) { TChNFe(value);
this._chNFe=value
 } _tpEvento ; get tpEvento ( ) { return this._tpEvento; } set tpEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{6}"});
this._tpEvento=value } _xEvento ; get xEvento ( ) { return this._xEvento; } set xEvento ( value : any ) { validate(value,{"minLength":"5","maxLength":"60"});
this._xEvento=value } _nSeqEvento ; get nSeqEvento ( ) { return this._nSeqEvento; } set nSeqEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[1-9][0-9]{0,1}"});
this._nSeqEvento=value } _CNPJDest ; get CNPJDest ( ) { return this._CNPJDest; } set CNPJDest ( value : any ) { TCnpjOpc(value);
this._CNPJDest=value
 } _CPFDest ; get CPFDest ( ) { return this._CPFDest; } set CPFDest ( value : any ) { TCpf(value);
this._CPFDest=value
 } _emailDest ; get emailDest ( ) { return this._emailDest; } set emailDest ( value : any ) { validate(value,{"minLength":"1","maxLength":"60"});
this._emailDest=value } _dhRegEvento ; get dhRegEvento ( ) { return this._dhRegEvento; } set dhRegEvento ( value : any ) { TDateTimeUTC(value);
this._dhRegEvento=value
 } _nProt ; get nProt ( ) { return this._nProt; } set nProt ( value : any ) { TProt(value);
this._nProt=value
 } _Id ; get Id ( ) { return this._Id; } set Id ( value : any ) { validate(value,{"pattern":"ID[0-9]{15}"});
this._Id=value } } export class TProcEvento { _evento ; get evento ( ) { return this._evento; } set evento ( value : TEvento ) { undefined } _retEvento ; get retEvento ( ) { return this._retEvento; } set retEvento ( value : TRetEvento ) { undefined } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } 