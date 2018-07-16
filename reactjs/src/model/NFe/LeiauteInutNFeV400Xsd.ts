import {TAmb,TCodUfIBGE,Tano,TCnpj,TMod,TSerie,TNF,TJust,TVerAplic,TStat,TMotivo,TDateTimeUTC,TProt} from "./TiposBasicoV400Xsd";
import { validate } from "../../Model" ; /* --------
  This is a generated file. All edits will be overwritten! 
-------- */

export const TVerInutNFe = function ( value : any ) { validate(value,{"pattern":"4\\.00"}); } export class TInutNFe { _infInut ; get infInut ( ) { return this._infInut; } set infInut ( value : TInutNFe_InfInut ) { this._infInut=value } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class TInutNFe_InfInut { _tpAmb ; get tpAmb ( ) { return this._tpAmb; } set tpAmb ( value : any ) { TAmb(value);
this._tpAmb=value
 } _xServ ; get xServ ( ) { return this._xServ; } set xServ ( value : any ) { validate(value,{"enumeration":["INUTILIZAR"]});
this._xServ=value } _cUF ; get cUF ( ) { return this._cUF; } set cUF ( value : any ) { TCodUfIBGE(value);
this._cUF=value
 } _ano ; get ano ( ) { return this._ano; } set ano ( value : any ) { Tano(value);
this._ano=value
 } _CNPJ ; get CNPJ ( ) { return this._CNPJ; } set CNPJ ( value : any ) { TCnpj(value);
this._CNPJ=value
 } _mod ; get mod ( ) { return this._mod; } set mod ( value : any ) { TMod(value);
this._mod=value
 } _serie ; get serie ( ) { return this._serie; } set serie ( value : any ) { TSerie(value);
this._serie=value
 } _nNFIni ; get nNFIni ( ) { return this._nNFIni; } set nNFIni ( value : any ) { TNF(value);
this._nNFIni=value
 } _nNFFin ; get nNFFin ( ) { return this._nNFFin; } set nNFFin ( value : any ) { TNF(value);
this._nNFFin=value
 } _xJust ; get xJust ( ) { return this._xJust; } set xJust ( value : any ) { TJust(value);
this._xJust=value
 } _Id ; get Id ( ) { return this._Id; } set Id ( value : any ) { validate(value,{"pattern":"ID[0-9]{41}"});
this._Id=value } } export class TRetInutNFe { _infInut ; get infInut ( ) { return this._infInut; } set infInut ( value : TRetInutNFe_InfInut ) { this._infInut=value } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class TRetInutNFe_InfInut { _tpAmb ; get tpAmb ( ) { return this._tpAmb; } set tpAmb ( value : any ) { TAmb(value);
this._tpAmb=value
 } _verAplic ; get verAplic ( ) { return this._verAplic; } set verAplic ( value : any ) { TVerAplic(value);
this._verAplic=value
 } _cStat ; get cStat ( ) { return this._cStat; } set cStat ( value : any ) { TStat(value);
this._cStat=value
 } _xMotivo ; get xMotivo ( ) { return this._xMotivo; } set xMotivo ( value : any ) { TMotivo(value);
this._xMotivo=value
 } _cUF ; get cUF ( ) { return this._cUF; } set cUF ( value : any ) { TCodUfIBGE(value);
this._cUF=value
 } _ano ; get ano ( ) { return this._ano; } set ano ( value : any ) { Tano(value);
this._ano=value
 } _CNPJ ; get CNPJ ( ) { return this._CNPJ; } set CNPJ ( value : any ) { TCnpj(value);
this._CNPJ=value
 } _mod ; get mod ( ) { return this._mod; } set mod ( value : any ) { TMod(value);
this._mod=value
 } _serie ; get serie ( ) { return this._serie; } set serie ( value : any ) { TSerie(value);
this._serie=value
 } _nNFIni ; get nNFIni ( ) { return this._nNFIni; } set nNFIni ( value : any ) { TNF(value);
this._nNFIni=value
 } _nNFFin ; get nNFFin ( ) { return this._nNFFin; } set nNFFin ( value : any ) { TNF(value);
this._nNFFin=value
 } _dhRecbto ; get dhRecbto ( ) { return this._dhRecbto; } set dhRecbto ( value : any ) { TDateTimeUTC(value);
this._dhRecbto=value
 } _nProt ; get nProt ( ) { return this._nProt; } set nProt ( value : any ) { TProt(value);
this._nProt=value
 } _Id ; get Id ( ) { return this._Id; } set Id ( value : any ) { undefined } } export class TProcInutNFe { _inutNFe ; get inutNFe ( ) { return this._inutNFe; } set inutNFe ( value : TInutNFe ) { undefined } _retInutNFe ; get retInutNFe ( ) { return this._retInutNFe; } set retInutNFe ( value : TRetInutNFe ) { undefined } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } 