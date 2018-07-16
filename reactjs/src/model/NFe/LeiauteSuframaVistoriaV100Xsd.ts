import {TAmb,TCnpjOpc,TCpf,TChNFe,TDateTimeUTC,TVerAplic,TStat,TMotivo,TProt,TUf,TPlaca,TCnpj,TDec_1302} from "./TiposBasicoV103Xsd";
import { validate } from "../../Model" ; /* --------
  This is a generated file. All edits will be overwritten! 
-------- */

export const TVerEvento = function ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"1\\.00"}); } 
export const TVerEnvEvento = function ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"1\\.00"}); } 
export const TCOrgaoIBGE = function ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["11","12","13","14","15","16","17","21","22","23","24","25","26","27","28","29","31","32","33","35","41","42","43","50","51","52","53","90","91"]}); } export class TEvento { _infEvento ; get infEvento ( ) { return this._infEvento; } set infEvento ( value : TEvento_InfEvento ) { this._infEvento=value } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class TEvento_InfEvento { _cOrgao ; get cOrgao ( ) { return this._cOrgao; } set cOrgao ( value : any ) { TCOrgaoIBGE(value);
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
 } _tpEvento ; get tpEvento ( ) { return this._tpEvento; } set tpEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{6}","enumeration":["990910"]});
this._tpEvento=value } _nSeqEvento ; get nSeqEvento ( ) { return this._nSeqEvento; } set nSeqEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[1-9]|[1][0-9]{0,1}|20"});
this._nSeqEvento=value } _verEvento ; get verEvento ( ) { return this._verEvento; } set verEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1.00"]});
this._verEvento=value } _detEvento ; get detEvento ( ) { return this._detEvento; } set detEvento ( value : TEvento_InfEvento_DetEvento ) { this._detEvento=value } _Id ; get Id ( ) { return this._Id; } set Id ( value : any ) { validate(value,{"pattern":"ID[0-9]{52}"});
this._Id=value } } export class TEvento_InfEvento_DetEvento { _descEvento ; get descEvento ( ) { return this._descEvento; } set descEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["Vistoria SUFRAMA"]});
this._descEvento=value } _PINe ; get PINe ( ) { return this._PINe; } set PINe ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{1,9}"});
this._PINe=value } _dVistoria ; get dVistoria ( ) { return this._dVistoria; } set dVistoria ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"(((20(([02468][048])|([13579][26]))-02-29))|(20[0-9][0-9])-((((0[1-9])|(1[0-2]))-((0[1-9])|(1\\d)|(2[0-8])))|((((0[13578])|(1[02]))-31)|(((0[1,3-9])|(1[0-2]))-(29|30)))))T(20|21|22|23|[0-1]\\d):[0-5]\\d:[0-5]\\d-0[1-4]:00"});
this._dVistoria=value } _locVistoria ; get locVistoria ( ) { return this._locVistoria; } set locVistoria ( value : any ) { validate(value,{"minLength":"5","maxLength":"60"});
this._locVistoria=value } _postoVistoria ; get postoVistoria ( ) { return this._postoVistoria; } set postoVistoria ( value : any ) { validate(value,{"minLength":"5","maxLength":"60"});
this._postoVistoria=value } _xHistorico ; get xHistorico ( ) { return this._xHistorico; } set xHistorico ( value : any ) { validate(value,{"minLength":"1","maxLength":"1024"});
this._xHistorico=value } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1.00"]});
this._versao=value } } export class TretEvento { _infEvento ; get infEvento ( ) { return this._infEvento; } set infEvento ( value : TretEvento_InfEvento ) { this._infEvento=value } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class TretEvento_InfEvento { _tpAmb ; get tpAmb ( ) { return this._tpAmb; } set tpAmb ( value : any ) { TAmb(value);
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
export const DescEvento = function ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["Registro Passagem NFe"]}); } 
export const COrgaoAutor = function ( value : TCOrgaoIBGE ) { undefined } 
export const CPostoUF = function ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{4}"}); } 
export const XPostoUF = function ( value : any ) { validate(value,{"minLength":"2","maxLength":"60"}); } 
export const LatGPS = function ( value : any ) { validate(value,{"pattern":"[0-9]\\.[0-9]{6}|[1-8][0-9]\\.[0-9]{6}|90\\.[0-9]{6}|-[0-9]\\.[0-9]{6}|-[1-8][0-9]\\.[0-9]{6}|-90\\.[0-9]{6}"}); } 
export const LongGPS = function ( value : any ) { validate(value,{"pattern":"[0-9]\\.[0-9]{6}|[1-9][0-9]\\.[0-9]{6}|1[0-7][0-9]\\.[0-9]{6}|180\\.[0-9]{6}|-[0-9]\\.[0-9]{6}|-[1-9][0-9]\\.[0-9]{6}|-1[0-7][0-9]\\.[0-9]{6}|-180\\.[0-9]{6}"}); } 
export const CPFOper = function ( value : TCpf ) { undefined } 
export const XNomeOper = function ( value : any ) { validate(value,{"minLength":"2","maxLength":"60"}); } 
export const IndOffline = function ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1"]}); } 
export const DhPas = function ( value : TDateTimeUTC ) { undefined } 
export const SentidoVia = function ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["E","S","I"]}); } 
export const IndRet = function ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["R"]}); } 
export const UFDest = function ( value : TUf ) { undefined } 
export const XObs = function ( value : any ) { validate(value,{"minLength":"1","maxLength":"255"}); } 
export const ChMDFe = function ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{44}"}); } 
export const ChCTe = function ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{44}"}); } 
export const ModalRodov = function ( value : any ) { undefined } export class ModalRodov { _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } } 
export const PlacaVeic = function ( value : TPlaca ) { undefined } 
export const UFVeic = function ( value : TUf ) { undefined } 
export const PlacaCarreta = function ( value : TPlaca ) { undefined } 
export const UFCarreta = function ( value : TUf ) { undefined } 
export const PlacaCarreta2 = function ( value : TPlaca ) { undefined } 
export const UFCarreta2 = function ( value : TUf ) { undefined } 
export const ModalOutro = function ( value : any ) { undefined } export class ModalOutro { _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } } 
export const TpModal = function ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["F","D","AE","AQ","O"]}); } 
export const XIdent = function ( value : any ) { validate(value,{"minLength":"1","maxLength":"255"}); } 
export const Ctg = function ( value : any ) { undefined } export class Ctg { _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } } 
export const NFormSeg = function ( value : any ) { validate(value,{"minLength":"1","maxLength":"11"}); } 
export const TpEmis = function ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["2","5"]}); } 
export const CNPJDest = function ( value : TCnpj ) { undefined } 
export const CPFDest = function ( value : TCpf ) { undefined } 
export const VTotalNFe = function ( value : TDec_1302 ) { undefined } 
export const IndICMS = function ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1","2"]}); } 
export const IndICMSST = function ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1","2"]}); } 
export const DiaEmi = function ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[1-9]|[1][0-9]|[2][0-9]|[3][0-1]?"}); } 