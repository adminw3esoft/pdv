import {TAmb,TCodUfIBGE,TVerAplic,TStat,TMotivo,TDateTimeUTC,TMed} from "./TiposBasicoV400Xsd";
import { validate } from "../../Model" ; /* --------
  This is a generated file. All edits will be overwritten! 
-------- */

export const TVerConsStatServ = function ( value : any ) { validate(value,{"pattern":"4\\.00"}); } export class TConsStatServ { _tpAmb ; get tpAmb ( ) { return this._tpAmb; } set tpAmb ( value : any ) { TAmb(value);
this._tpAmb=value
 } _cUF ; get cUF ( ) { return this._cUF; } set cUF ( value : any ) { TCodUfIBGE(value);
this._cUF=value
 } _xServ ; get xServ ( ) { return this._xServ; } set xServ ( value : any ) { validate(value,{"enumeration":["STATUS"]});
this._xServ=value } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class TRetConsStatServ { _tpAmb ; get tpAmb ( ) { return this._tpAmb; } set tpAmb ( value : any ) { TAmb(value);
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
 } _tMed ; get tMed ( ) { return this._tMed; } set tMed ( value : any ) { TMed(value);
this._tMed=value
 } _dhRetorno ; get dhRetorno ( ) { return this._dhRetorno; } set dhRetorno ( value : any ) { TDateTimeUTC(value);
this._dhRetorno=value
 } _xObs ; get xObs ( ) { return this._xObs; } set xObs ( value : any ) { TMotivo(value);
this._xObs=value
 } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } 