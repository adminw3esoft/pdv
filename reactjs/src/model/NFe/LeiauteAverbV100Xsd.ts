import {TAmb,TCnpj,TChNFe,TDateTimeUTC,TVerAplic,TDec_1104v,TStat,TMotivo,TCnpjOpc,TCpf,TProt} from "./TiposBasicoV103Xsd";
import { validate } from "../../Model" ; /* --------
  This is a generated file. All edits will be overwritten! 
-------- */

export const TVerEnvEvento = function ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"1\\.00"}); } 
export const TVerEvento = function ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"1\\.00"}); } 
export const TCOrgaoIBGE = function ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["11","12","13","14","15","16","17","21","22","23","24","25","26","27","28","29","31","32","33","35","41","42","43","50","51","52","53","90","91"]}); } export class TEvento { _infEvento ; get infEvento ( ) { return this._infEvento; } set infEvento ( value : TEvento_InfEvento ) { this._infEvento=value } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class TEvento_InfEvento { _cOrgao ; get cOrgao ( ) { return this._cOrgao; } set cOrgao ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["91"]});
this._cOrgao=value } _tpAmb ; get tpAmb ( ) { return this._tpAmb; } set tpAmb ( value : any ) { TAmb(value);
this._tpAmb=value
 } _CNPJ ; get CNPJ ( ) { return this._CNPJ; } set CNPJ ( value : any ) { TCnpj(value);
this._CNPJ=value
 } _chNFe ; get chNFe ( ) { return this._chNFe; } set chNFe ( value : any ) { TChNFe(value);
this._chNFe=value
 } _dhEvento ; get dhEvento ( ) { return this._dhEvento; } set dhEvento ( value : any ) { TDateTimeUTC(value);
this._dhEvento=value
 } _tpEvento ; get tpEvento ( ) { return this._tpEvento; } set tpEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["790700"]});
this._tpEvento=value } _nSeqEvento ; get nSeqEvento ( ) { return this._nSeqEvento; } set nSeqEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[1-9][0-9]{0,1}"});
this._nSeqEvento=value } _verEvento ; get verEvento ( ) { return this._verEvento; } set verEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1\\.00"]});
this._verEvento=value } _detEvento ; get detEvento ( ) { return this._detEvento; } set detEvento ( value : TEvento_InfEvento_DetEvento ) { this._detEvento=value } _Id ; get Id ( ) { return this._Id; } set Id ( value : any ) { validate(value,{"pattern":"ID[0-9]{52}"});
this._Id=value } } export class TEvento_InfEvento_DetEvento { _descEvento ; get descEvento ( ) { return this._descEvento; } set descEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["Averbação para Exportação","Averbacao para Exportacao"]});
this._descEvento=value } _tpAutor ; get tpAutor ( ) { return this._tpAutor; } set tpAutor ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["6"]});
this._tpAutor=value } _verAplic ; get verAplic ( ) { return this._verAplic; } set verAplic ( value : any ) { TVerAplic(value);
this._verAplic=value
 } _itensAverbados ; get itensAverbados ( ) { return this._itensAverbados; } set itensAverbados ( value : TEvento_InfEvento_DetEvento_ItensAverbados ) { this._itensAverbados=value } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1\\.00"]});
this._versao=value } } export class TEvento_InfEvento_DetEvento_ItensAverbados { _dhEmbarque ; get dhEmbarque ( ) { return this._dhEmbarque; } set dhEmbarque ( value : any ) { TDateTimeUTC(value);
this._dhEmbarque=value
 } _dhAverbacao ; get dhAverbacao ( ) { return this._dhAverbacao; } set dhAverbacao ( value : any ) { TDateTimeUTC(value);
this._dhAverbacao=value
 } _nDue ; get nDue ( ) { return this._nDue; } set nDue ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{14}"});
this._nDue=value } _nItem ; get nItem ( ) { return this._nItem; } set nItem ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{1,3}"});
this._nItem=value } _nItemDue ; get nItemDue ( ) { return this._nItemDue; } set nItemDue ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{1,3}"});
this._nItemDue=value } _qItem ; get qItem ( ) { return this._qItem; } set qItem ( value : any ) { TDec_1104v(value);
this._qItem=value
 } _motAlteracao ; get motAlteracao ( ) { return this._motAlteracao; } set motAlteracao ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1","2","3"]});
this._motAlteracao=value } } export class TretEvento { _infEvento ; get infEvento ( ) { return this._infEvento; } set infEvento ( value : TretEvento_InfEvento ) { this._infEvento=value } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class TretEvento_InfEvento { _tpAmb ; get tpAmb ( ) { return this._tpAmb; } set tpAmb ( value : any ) { TAmb(value);
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
this._emailDest=value } _dhRegEvento ; get dhRegEvento ( ) { return this._dhRegEvento; } set dhRegEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"(((20(([02468][048])|([13579][26]))-02-29))|(20[0-9][0-9])-((((0[1-9])|(1[0-2]))-((0[1-9])|(1\\d)|(2[0-8])))|((((0[13578])|(1[02]))-31)|(((0[1,3-9])|(1[0-2]))-(29|30)))))T(20|21|22|23|[0-1]\\d):[0-5]\\d:[0-5]\\d-0[1-4]:00"});
this._dhRegEvento=value } _nProt ; get nProt ( ) { return this._nProt; } set nProt ( value : any ) { TProt(value);
this._nProt=value
 } _Id ; get Id ( ) { return this._Id; } set Id ( value : any ) { validate(value,{"pattern":"ID[0-9]{15}"});
this._Id=value } } export class TEnvEvento { _idLote ; get idLote ( ) { return this._idLote; } set idLote ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{1,15}"});
this._idLote=value } _evento ; get evento ( ) { return this._evento; } set evento ( value : TEvento ) { undefined } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class TRetEnvEvento { _idLote ; get idLote ( ) { return this._idLote; } set idLote ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{1,15}"});
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
 } _retEvento ; get retEvento ( ) { return this._retEvento; } set retEvento ( value : TretEvento ) { undefined } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class TProcEvento { _evento ; get evento ( ) { return this._evento; } set evento ( value : TEvento ) { undefined } _retEvento ; get retEvento ( ) { return this._retEvento; } set retEvento ( value : TretEvento ) { undefined } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } 