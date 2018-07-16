import {TCnpj,TCpf,TVerAplic,TDateTimeUTC,TCodUfIBGE,TUf,TDec_1302} from "./TiposBasicoV103Xsd";
import { validate } from "../../Model" ; /* --------
  This is a generated file. All edits will be overwritten! 
-------- */

export const DetEvento = function ( value : any ) { undefined } export class DetEvento { _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _dest ; get dest ( ) { return this._dest; } set dest ( value : DetEvento_Dest ) { this._dest=value } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1.00"]});
this._versao=value } } export class DetEvento_Dest { _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _CNPJ ; get CNPJ ( ) { return this._CNPJ; } set CNPJ ( value : any ) { TCnpj(value);
this._CNPJ=value
 } _CPF ; get CPF ( ) { return this._CPF; } set CPF ( value : any ) { TCpf(value);
this._CPF=value
 } _idEstrangeiro ; get idEstrangeiro ( ) { return this._idEstrangeiro; } set idEstrangeiro ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"([!-ÿ]{0}|[!-ÿ]{5,20})?"});
this._idEstrangeiro=value } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } } 
export const DescEvento = function ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["EPEC"]}); } 
export const TpAutor = function ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1"]}); } 
export const VerAplic = function ( value : TVerAplic ) { undefined } 
export const DhEmi = function ( value : TDateTimeUTC ) { undefined } 
export const TpNF = function ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["0","1"]}); } 
export const COrgaoAutor = function ( value : TCodUfIBGE ) { undefined } 
export const IE = function ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{2,14}"}); } 
export const UF = function ( value : TUf ) { undefined } 
export const VNF = function ( value : TDec_1302 ) { undefined } 
export const VICMS = function ( value : TDec_1302 ) { undefined } 
export const VST = function ( value : TDec_1302 ) { undefined } 