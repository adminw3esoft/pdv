import {TAmb,TCodUfIBGE,TCnpj,TCpf,TNSU} from "./TiposDistDFeV100Xsd";
import { validate } from "../../Model" ; /* --------
  This is a generated file. All edits will be overwritten! 
-------- */

export const DistDFeInt = function ( value : any ) { undefined } export class DistDFeInt { _tpAmb ; get tpAmb ( ) { return this._tpAmb; } set tpAmb ( value : any ) { TAmb(value);
this._tpAmb=value
 } _cUFAutor ; get cUFAutor ( ) { return this._cUFAutor; } set cUFAutor ( value : any ) { TCodUfIBGE(value);
this._cUFAutor=value
 } _CNPJ ; get CNPJ ( ) { return this._CNPJ; } set CNPJ ( value : any ) { TCnpj(value);
this._CNPJ=value
 } _CPF ; get CPF ( ) { return this._CPF; } set CPF ( value : any ) { TCpf(value);
this._CPF=value
 } _distNSU ; get distNSU ( ) { return this._distNSU; } set distNSU ( value : DistDFeInt_DistNSU ) { this._distNSU=value } _consNSU ; get consNSU ( ) { return this._consNSU; } set consNSU ( value : DistDFeInt_ConsNSU ) { this._consNSU=value } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class DistDFeInt_DistNSU { _ultNSU ; get ultNSU ( ) { return this._ultNSU; } set ultNSU ( value : any ) { TNSU(value);
this._ultNSU=value
 } } export class DistDFeInt_ConsNSU { _NSU ; get NSU ( ) { return this._NSU; } set NSU ( value : any ) { TNSU(value);
this._NSU=value
 } } 