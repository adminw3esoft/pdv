import {TChNFe,TCnpj,TCpf,TIe,TDateTimeUTC,TDec_1302,TProt} from "./TiposDistDFeV100Xsd";
import { validate } from "../../Model" ; /* --------
  This is a generated file. All edits will be overwritten! 
-------- */

export const TVerResNFe = function ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1.00"]}); } 
export const ResNFe = function ( value : any ) { undefined } export class ResNFe { _chNFe ; get chNFe ( ) { return this._chNFe; } set chNFe ( value : any ) { TChNFe(value);
this._chNFe=value
 } _CNPJ ; get CNPJ ( ) { return this._CNPJ; } set CNPJ ( value : any ) { TCnpj(value);
this._CNPJ=value
 } _CPF ; get CPF ( ) { return this._CPF; } set CPF ( value : any ) { TCpf(value);
this._CPF=value
 } _xNome ; get xNome ( ) { return this._xNome; } set xNome ( value : any ) { validate(value,{"maxLength":"60","minLength":"2"});
this._xNome=value } _IE ; get IE ( ) { return this._IE; } set IE ( value : any ) { TIe(value);
this._IE=value
 } _dhEmi ; get dhEmi ( ) { return this._dhEmi; } set dhEmi ( value : any ) { TDateTimeUTC(value);
this._dhEmi=value
 } _tpNF ; get tpNF ( ) { return this._tpNF; } set tpNF ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["0","1"]});
this._tpNF=value } _vNF ; get vNF ( ) { return this._vNF; } set vNF ( value : any ) { TDec_1302(value);
this._vNF=value
 } _digVal ; get digVal ( ) { return this._digVal; } set digVal ( value : any ) { undefined } _dhRecbto ; get dhRecbto ( ) { return this._dhRecbto; } set dhRecbto ( value : any ) { TDateTimeUTC(value);
this._dhRecbto=value
 } _nProt ; get nProt ( ) { return this._nProt; } set nProt ( value : any ) { TProt(value);
this._nProt=value
 } _cSitNFe ; get cSitNFe ( ) { return this._cSitNFe; } set cSitNFe ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1","2"]});
this._cSitNFe=value } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } 