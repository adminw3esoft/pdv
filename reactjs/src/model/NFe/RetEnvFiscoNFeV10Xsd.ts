import {TAmb,TVerAplic,TStat,TMotivo,TChNFe,TCnpjOpc,TDateTimeUTC,TProt} from "./TiposBasicoV310Xsd";
import { validate } from "../../Model" ; /* --------
  This is a generated file. All edits will be overwritten! 
-------- */

export const TCOrgaoIBGE = function ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["11","12","13","14","15","16","17","21","22","23","24","25","26","27","28","29","31","32","33","35","41","42","43","50","51","52","53","91"]}); } 
export const RetEnvEvento = function ( value : any ) { undefined } export class RetEnvEvento { _idLote ; get idLote ( ) { return this._idLote; } set idLote ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{1,15}"});
this._idLote=value } _tpAmb ; get tpAmb ( ) { return this._tpAmb; } set tpAmb ( value : any ) { TAmb(value);
this._tpAmb=value
 } _verAplic ; get verAplic ( ) { return this._verAplic; } set verAplic ( value : any ) { TVerAplic(value);
this._verAplic=value
 } _cOrgao ; get cOrgao ( ) { return this._cOrgao; } set cOrgao ( value : any ) { TCOrgaoIBGE(value);
this._cOrgao=value
 } _cStat ; get cStat ( ) { return this._cStat; } set cStat ( value : any ) { TStat(value);
this._cStat=value
 } _xMotivo ; get xMotivo ( ) { return this._xMotivo; } set xMotivo ( value : any ) { TMotivo(value);
this._xMotivo=value
 } _retEvento ; get retEvento ( ) { return this._retEvento; } set retEvento ( value : RetEnvEvento_RetEvento ) { this._retEvento=value } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{2}\\.[0-9]{2}"});
this._versao=value } } export class RetEnvEvento_RetEvento { _infEvento ; get infEvento ( ) { return this._infEvento; } set infEvento ( value : RetEnvEvento_RetEvento_InfEvento ) { this._infEvento=value } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{2}\\.[0-9]{2}"});
this._versao=value } } export class RetEnvEvento_RetEvento_InfEvento { _tpAmb ; get tpAmb ( ) { return this._tpAmb; } set tpAmb ( value : any ) { TAmb(value);
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
 } _tpEvento ; get tpEvento ( ) { return this._tpEvento; } set tpEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{6}","enumeration":["411500","411501","411502","411503"]});
this._tpEvento=value } _xEvento ; get xEvento ( ) { return this._xEvento; } set xEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["Evento Fisco Registrado"]});
this._xEvento=value } _nSeqEvento ; get nSeqEvento ( ) { return this._nSeqEvento; } set nSeqEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{1,2}"});
this._nSeqEvento=value } _CNPJDest ; get CNPJDest ( ) { return this._CNPJDest; } set CNPJDest ( value : any ) { TCnpjOpc(value);
this._CNPJDest=value
 } _emailDest ; get emailDest ( ) { return this._emailDest; } set emailDest ( value : any ) { validate(value,{"minLength":"1","maxLength":"60"});
this._emailDest=value } _dhRegEvento ; get dhRegEvento ( ) { return this._dhRegEvento; } set dhRegEvento ( value : any ) { TDateTimeUTC(value);
this._dhRegEvento=value
 } _nProt ; get nProt ( ) { return this._nProt; } set nProt ( value : any ) { TProt(value);
this._nProt=value
 } _Id ; get Id ( ) { return this._Id; } set Id ( value : any ) { validate(value,{"pattern":"ID[0-9]{52}"});
this._Id=value } } 