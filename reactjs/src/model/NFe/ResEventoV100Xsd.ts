import {TCOrgaoIBGE,TCnpj,TCpf,TChNFe,TDateTimeUTC,TProt} from "./TiposDistDFeV100Xsd";
import { validate } from "../../Model" ; /* --------
  This is a generated file. All edits will be overwritten! 
-------- */

export const TVerResEvento = function ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1.00"]}); } 
export const ResEvento = function ( value : any ) { undefined } export class ResEvento { _cOrgao ; get cOrgao ( ) { return this._cOrgao; } set cOrgao ( value : any ) { TCOrgaoIBGE(value);
this._cOrgao=value
 } _CNPJ ; get CNPJ ( ) { return this._CNPJ; } set CNPJ ( value : any ) { TCnpj(value);
this._CNPJ=value
 } _CPF ; get CPF ( ) { return this._CPF; } set CPF ( value : any ) { TCpf(value);
this._CPF=value
 } _chNFe ; get chNFe ( ) { return this._chNFe; } set chNFe ( value : any ) { TChNFe(value);
this._chNFe=value
 } _dhEvento ; get dhEvento ( ) { return this._dhEvento; } set dhEvento ( value : any ) { TDateTimeUTC(value);
this._dhEvento=value
 } _tpEvento ; get tpEvento ( ) { return this._tpEvento; } set tpEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{6}"});
this._tpEvento=value } _nSeqEvento ; get nSeqEvento ( ) { return this._nSeqEvento; } set nSeqEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[1-9][0-9]{0,1}"});
this._nSeqEvento=value } _xEvento ; get xEvento ( ) { return this._xEvento; } set xEvento ( value : any ) { validate(value,{"minLength":"5","maxLength":"60"});
this._xEvento=value } _dhRecbto ; get dhRecbto ( ) { return this._dhRecbto; } set dhRecbto ( value : any ) { TDateTimeUTC(value);
this._dhRecbto=value
 } _nProt ; get nProt ( ) { return this._nProt; } set nProt ( value : any ) { TProt(value);
this._nProt=value
 } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } 