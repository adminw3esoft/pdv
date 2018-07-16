import {TAmb,TCnpjOpc,TCpf,TChNFe,TDateTimeUTC,TCodUfIBGE,TVerAplic,TIe,TDec_1302,TUf} from "./TiposBasicoV310Xsd";
import { validate } from "../../Model" ; /* --------
  This is a generated file. All edits will be overwritten! 
-------- */

export const TVerEvento = function ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{1,2}\\.[0-9]{1,2}"}); } 
export const TCOrgaoIBGE = function ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["11","12","13","14","15","16","17","21","22","23","24","25","26","27","28","29","31","32","33","35","41","42","43","50","51","52","53","91"]}); } 
export const EnvEvento = function ( value : any ) { undefined } export class EnvEvento { _idLote ; get idLote ( ) { return this._idLote; } set idLote ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{1,15}"});
this._idLote=value } _evento ; get evento ( ) { return this._evento; } set evento ( value : EnvEvento_Evento ) { this._evento=value } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class EnvEvento_Evento { _infEvento ; get infEvento ( ) { return this._infEvento; } set infEvento ( value : EnvEvento_Evento_InfEvento ) { this._infEvento=value } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class EnvEvento_Evento_InfEvento { _cOrgao ; get cOrgao ( ) { return this._cOrgao; } set cOrgao ( value : any ) { TCOrgaoIBGE(value);
this._cOrgao=value
 } _tpAmb ; get tpAmb ( ) { return this._tpAmb; } set tpAmb ( value : any ) { TAmb(value);
this._tpAmb=value
 } _CNPJ ; get CNPJ ( ) { return this._CNPJ; } set CNPJ ( value : any ) { TCnpjOpc(value);
this._CNPJ=value
 } _CPF ; get CPF ( ) { return this._CPF; } set CPF ( value : any ) { TCpf(value);
this._CPF=value
 } _chNFe ; get chNFe ( ) { return this._chNFe; } set chNFe ( value : any ) { TChNFe(value);
this._chNFe=value
 } _dhEvento ; get dhEvento ( ) { return this._dhEvento; } set dhEvento ( value : any ) { TDateTimeUTC(value);
this._dhEvento=value
 } _tpEvento ; get tpEvento ( ) { return this._tpEvento; } set tpEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{6}","enumeration":["110140"]});
this._tpEvento=value } _nSeqEvento ; get nSeqEvento ( ) { return this._nSeqEvento; } set nSeqEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{1,2}"});
this._nSeqEvento=value } _verEvento ; get verEvento ( ) { return this._verEvento; } set verEvento ( value : any ) { TVerEvento(value);
this._verEvento=value
 } _detEvento ; get detEvento ( ) { return this._detEvento; } set detEvento ( value : EnvEvento_Evento_InfEvento_DetEvento ) { this._detEvento=value } _Id ; get Id ( ) { return this._Id; } set Id ( value : any ) { validate(value,{"pattern":"ID[0-9]{52}"});
this._Id=value } } export class EnvEvento_Evento_InfEvento_DetEvento { _descEvento ; get descEvento ( ) { return this._descEvento; } set descEvento ( value : any ) { validate(value,{"enumeration":["EPEC"]});
this._descEvento=value } _cOrgaoAutor ; get cOrgaoAutor ( ) { return this._cOrgaoAutor; } set cOrgaoAutor ( value : any ) { TCodUfIBGE(value);
this._cOrgaoAutor=value
 } _tpAutor ; get tpAutor ( ) { return this._tpAutor; } set tpAutor ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1"]});
this._tpAutor=value } _verAplic ; get verAplic ( ) { return this._verAplic; } set verAplic ( value : any ) { TVerAplic(value);
this._verAplic=value
 } _dhEmi ; get dhEmi ( ) { return this._dhEmi; } set dhEmi ( value : any ) { TDateTimeUTC(value);
this._dhEmi=value
 } _tpNF ; get tpNF ( ) { return this._tpNF; } set tpNF ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1"]});
this._tpNF=value } _IE ; get IE ( ) { return this._IE; } set IE ( value : any ) { TIe(value);
this._IE=value
 } _dest ; get dest ( ) { return this._dest; } set dest ( value : EnvEvento_Evento_InfEvento_DetEvento_Dest ) { this._dest=value } _vNF ; get vNF ( ) { return this._vNF; } set vNF ( value : any ) { TDec_1302(value);
this._vNF=value
 } _vICMS ; get vICMS ( ) { return this._vICMS; } set vICMS ( value : any ) { TDec_1302(value);
this._vICMS=value
 } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class EnvEvento_Evento_InfEvento_DetEvento_Dest { _UF ; get UF ( ) { return this._UF; } set UF ( value : any ) { TUf(value);
this._UF=value
 } _CNPJ ; get CNPJ ( ) { return this._CNPJ; } set CNPJ ( value : any ) { TCnpjOpc(value);
this._CNPJ=value
 } _CPF ; get CPF ( ) { return this._CPF; } set CPF ( value : any ) { TCpf(value);
this._CPF=value
 } _idEstrangeiro ; get idEstrangeiro ( ) { return this._idEstrangeiro; } set idEstrangeiro ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"([!-ÿ]{0}|[!-ÿ]{5,20})?"});
this._idEstrangeiro=value } } 