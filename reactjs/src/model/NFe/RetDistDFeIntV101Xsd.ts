import {TAmb,TVerAplic,TStat,TMotivo,TDateTimeUTC,TNSU} from "./TiposDistDFeV101Xsd";
import { validate } from "../../Model" ; /* --------
  This is a generated file. All edits will be overwritten! 
-------- */

export const RetDistDFeInt = function ( value : any ) { undefined } export class RetDistDFeInt { _tpAmb ; get tpAmb ( ) { return this._tpAmb; } set tpAmb ( value : any ) { TAmb(value);
this._tpAmb=value
 } _verAplic ; get verAplic ( ) { return this._verAplic; } set verAplic ( value : any ) { TVerAplic(value);
this._verAplic=value
 } _cStat ; get cStat ( ) { return this._cStat; } set cStat ( value : any ) { TStat(value);
this._cStat=value
 } _xMotivo ; get xMotivo ( ) { return this._xMotivo; } set xMotivo ( value : any ) { TMotivo(value);
this._xMotivo=value
 } _dhResp ; get dhResp ( ) { return this._dhResp; } set dhResp ( value : any ) { TDateTimeUTC(value);
this._dhResp=value
 } _ultNSU ; get ultNSU ( ) { return this._ultNSU; } set ultNSU ( value : any ) { TNSU(value);
this._ultNSU=value
 } _maxNSU ; get maxNSU ( ) { return this._maxNSU; } set maxNSU ( value : any ) { TNSU(value);
this._maxNSU=value
 } _loteDistDFeInt ; get loteDistDFeInt ( ) { return this._loteDistDFeInt; } set loteDistDFeInt ( value : RetDistDFeInt_LoteDistDFeInt ) { this._loteDistDFeInt=value } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class RetDistDFeInt_LoteDistDFeInt { _docZip ; get docZip ( ) { return this._docZip; } set docZip ( value : RetDistDFeInt_LoteDistDFeInt_DocZip ) { this._docZip=value } } export class RetDistDFeInt_LoteDistDFeInt_DocZip { _NSU ; get NSU ( ) { return this._NSU; } set NSU ( value : any ) { undefined } _schema ; get schema ( ) { return this._schema; } set schema ( value : any ) { undefined } } 