import {TAmb,TCnpj,TChNFe,TVerAplic,TStat,TMotivo} from "./TiposBasicoV103Xsd";
import { validate } from "../../Model" ; /* --------
  This is a generated file. All edits will be overwritten! 
-------- */

export const TVerDownloadNFe = function ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1.00"]}); } export class TDownloadNFe { _tpAmb ; get tpAmb ( ) { return this._tpAmb; } set tpAmb ( value : any ) { TAmb(value);
this._tpAmb=value
 } _xServ ; get xServ ( ) { return this._xServ; } set xServ ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["DOWNLOAD NFE"]});
this._xServ=value } _CNPJ ; get CNPJ ( ) { return this._CNPJ; } set CNPJ ( value : any ) { TCnpj(value);
this._CNPJ=value
 } _chNFe ; get chNFe ( ) { return this._chNFe; } set chNFe ( value : any ) { TChNFe(value);
this._chNFe=value
 } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class TRetDownloadNFe { _tpAmb ; get tpAmb ( ) { return this._tpAmb; } set tpAmb ( value : any ) { TAmb(value);
this._tpAmb=value
 } _verAplic ; get verAplic ( ) { return this._verAplic; } set verAplic ( value : any ) { TVerAplic(value);
this._verAplic=value
 } _cStat ; get cStat ( ) { return this._cStat; } set cStat ( value : any ) { TStat(value);
this._cStat=value
 } _xMotivo ; get xMotivo ( ) { return this._xMotivo; } set xMotivo ( value : any ) { TMotivo(value);
this._xMotivo=value
 } _dhResp ; get dhResp ( ) { return this._dhResp; } set dhResp ( value : any ) { undefined } _retNFe ; get retNFe ( ) { return this._retNFe; } set retNFe ( value : TRetDownloadNFe_RetNFe ) { this._retNFe=value } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class TRetDownloadNFe_RetNFe { _chNFe ; get chNFe ( ) { return this._chNFe; } set chNFe ( value : any ) { TChNFe(value);
this._chNFe=value
 } _cStat ; get cStat ( ) { return this._cStat; } set cStat ( value : any ) { TStat(value);
this._cStat=value
 } _xMotivo ; get xMotivo ( ) { return this._xMotivo; } set xMotivo ( value : any ) { TMotivo(value);
this._xMotivo=value
 } _procNFeGrupoZip ; get procNFeGrupoZip ( ) { return this._procNFeGrupoZip; } set procNFeGrupoZip ( value : TRetDownloadNFe_RetNFe_ProcNFeGrupoZip ) { this._procNFeGrupoZip=value } _procNFeZip ; get procNFeZip ( ) { return this._procNFeZip; } set procNFeZip ( value : any ) { undefined } _procNFe ; get procNFe ( ) { return this._procNFe; } set procNFe ( value : TRetDownloadNFe_RetNFe_ProcNFe ) { this._procNFe=value } } export class TRetDownloadNFe_RetNFe_ProcNFeGrupoZip { _NFeZip ; get NFeZip ( ) { return this._NFeZip; } set NFeZip ( value : any ) { undefined } _protNFeZip ; get protNFeZip ( ) { return this._protNFeZip; } set protNFeZip ( value : any ) { undefined } } export class TRetDownloadNFe_RetNFe_ProcNFe { _schema ; get schema ( ) { return this._schema; } set schema ( value : any ) { undefined } } 