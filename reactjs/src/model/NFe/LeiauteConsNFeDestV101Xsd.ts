import {TAmb,TCnpj,TVerAplic,TStat,TMotivo,TChNFe,TCpf,TIe,TData,TDec_1302} from "./TiposBasicoV103Xsd";
import { validate } from "../../Model" ; /* --------
  This is a generated file. All edits will be overwritten! 
-------- */

export const TNSU = function ( value : any ) { validate(value,{"pattern":"[0-9]{1,15}"}); } 
export const TVeConsNFeDest = function ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1.01"]}); } export class TConsNFeDest { _tpAmb ; get tpAmb ( ) { return this._tpAmb; } set tpAmb ( value : any ) { TAmb(value);
this._tpAmb=value
 } _xServ ; get xServ ( ) { return this._xServ; } set xServ ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["CONSULTAR NFE DEST"]});
this._xServ=value } _CNPJ ; get CNPJ ( ) { return this._CNPJ; } set CNPJ ( value : any ) { TCnpj(value);
this._CNPJ=value
 } _indNFe ; get indNFe ( ) { return this._indNFe; } set indNFe ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["0","1","2"]});
this._indNFe=value } _indEmi ; get indEmi ( ) { return this._indEmi; } set indEmi ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["0","1"]});
this._indEmi=value } _ultNSU ; get ultNSU ( ) { return this._ultNSU; } set ultNSU ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{1,15}"});
this._ultNSU=value } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class TRetConsNFeDest { _tpAmb ; get tpAmb ( ) { return this._tpAmb; } set tpAmb ( value : any ) { TAmb(value);
this._tpAmb=value
 } _verAplic ; get verAplic ( ) { return this._verAplic; } set verAplic ( value : any ) { TVerAplic(value);
this._verAplic=value
 } _cStat ; get cStat ( ) { return this._cStat; } set cStat ( value : any ) { TStat(value);
this._cStat=value
 } _xMotivo ; get xMotivo ( ) { return this._xMotivo; } set xMotivo ( value : any ) { TMotivo(value);
this._xMotivo=value
 } _dhResp ; get dhResp ( ) { return this._dhResp; } set dhResp ( value : any ) { undefined } _indCont ; get indCont ( ) { return this._indCont; } set indCont ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["0","1"]});
this._indCont=value } _ultNSU ; get ultNSU ( ) { return this._ultNSU; } set ultNSU ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[1-9][0-9]{0,14}"});
this._ultNSU=value } _ret ; get ret ( ) { return this._ret; } set ret ( value : TRetConsNFeDest_Ret ) { this._ret=value } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class TRetConsNFeDest_Ret { _resNFe ; get resNFe ( ) { return this._resNFe; } set resNFe ( value : TRetConsNFeDest_Ret_ResNFe ) { this._resNFe=value } _resCanc ; get resCanc ( ) { return this._resCanc; } set resCanc ( value : TRetConsNFeDest_Ret_ResCanc ) { this._resCanc=value } _resCCe ; get resCCe ( ) { return this._resCCe; } set resCCe ( value : TRetConsNFeDest_Ret_ResCCe ) { this._resCCe=value } } export class TRetConsNFeDest_Ret_ResNFe { _chNFe ; get chNFe ( ) { return this._chNFe; } set chNFe ( value : any ) { TChNFe(value);
this._chNFe=value
 } _CNPJ ; get CNPJ ( ) { return this._CNPJ; } set CNPJ ( value : any ) { TCnpj(value);
this._CNPJ=value
 } _CPF ; get CPF ( ) { return this._CPF; } set CPF ( value : any ) { TCpf(value);
this._CPF=value
 } _xNome ; get xNome ( ) { return this._xNome; } set xNome ( value : any ) { validate(value,{"minLength":"3","maxLength":"60"});
this._xNome=value } _IE ; get IE ( ) { return this._IE; } set IE ( value : any ) { TIe(value);
this._IE=value
 } _dEmi ; get dEmi ( ) { return this._dEmi; } set dEmi ( value : any ) { TData(value);
this._dEmi=value
 } _tpNF ; get tpNF ( ) { return this._tpNF; } set tpNF ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["0","1"]});
this._tpNF=value } _vNF ; get vNF ( ) { return this._vNF; } set vNF ( value : any ) { TDec_1302(value);
this._vNF=value
 } _digVal ; get digVal ( ) { return this._digVal; } set digVal ( value : any ) { validate(value,{"whiteSpace":"preserve"});
this._digVal=value } _dhRecbto ; get dhRecbto ( ) { return this._dhRecbto; } set dhRecbto ( value : any ) { undefined } _cSitNFe ; get cSitNFe ( ) { return this._cSitNFe; } set cSitNFe ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1","2","3"]});
this._cSitNFe=value } _cSitConf ; get cSitConf ( ) { return this._cSitConf; } set cSitConf ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["0","1","2","3","4"]});
this._cSitConf=value } _NSU ; get NSU ( ) { return this._NSU; } set NSU ( value : any ) { undefined } } export class TRetConsNFeDest_Ret_ResCanc { _chNFe ; get chNFe ( ) { return this._chNFe; } set chNFe ( value : any ) { TChNFe(value);
this._chNFe=value
 } _CNPJ ; get CNPJ ( ) { return this._CNPJ; } set CNPJ ( value : any ) { TCnpj(value);
this._CNPJ=value
 } _CPF ; get CPF ( ) { return this._CPF; } set CPF ( value : any ) { TCpf(value);
this._CPF=value
 } _xNome ; get xNome ( ) { return this._xNome; } set xNome ( value : any ) { validate(value,{"minLength":"3","maxLength":"60"});
this._xNome=value } _IE ; get IE ( ) { return this._IE; } set IE ( value : any ) { TIe(value);
this._IE=value
 } _dEmi ; get dEmi ( ) { return this._dEmi; } set dEmi ( value : any ) { TData(value);
this._dEmi=value
 } _tpNF ; get tpNF ( ) { return this._tpNF; } set tpNF ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["0","1"]});
this._tpNF=value } _vNF ; get vNF ( ) { return this._vNF; } set vNF ( value : any ) { TDec_1302(value);
this._vNF=value
 } _digVal ; get digVal ( ) { return this._digVal; } set digVal ( value : any ) { validate(value,{"whiteSpace":"preserve"});
this._digVal=value } _dhRecbto ; get dhRecbto ( ) { return this._dhRecbto; } set dhRecbto ( value : any ) { undefined } _cSitNFe ; get cSitNFe ( ) { return this._cSitNFe; } set cSitNFe ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["3"]});
this._cSitNFe=value } _cSitConf ; get cSitConf ( ) { return this._cSitConf; } set cSitConf ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["0","1","2","3","4"]});
this._cSitConf=value } _NSU ; get NSU ( ) { return this._NSU; } set NSU ( value : any ) { undefined } } export class TRetConsNFeDest_Ret_ResCCe { _chNFe ; get chNFe ( ) { return this._chNFe; } set chNFe ( value : any ) { TChNFe(value);
this._chNFe=value
 } _dhEvento ; get dhEvento ( ) { return this._dhEvento; } set dhEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"(((20(([02468][048])|([13579][26]))-02-29))|(20[0-9][0-9])-((((0[1-9])|(1[0-2]))-((0[1-9])|(1\\d)|(2[0-8])))|((((0[13578])|(1[02]))-31)|(((0[1,3-9])|(1[0-2]))-(29|30)))))T(20|21|22|23|[0-1]\\d):[0-5]\\d:[0-5]\\d-0[1-4]:00"});
this._dhEvento=value } _tpEvento ; get tpEvento ( ) { return this._tpEvento; } set tpEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{6}","enumeration":["110110"]});
this._tpEvento=value } _nSeqEvento ; get nSeqEvento ( ) { return this._nSeqEvento; } set nSeqEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[1-9]|[1][0-9]{0,1}|20"});
this._nSeqEvento=value } _descEvento ; get descEvento ( ) { return this._descEvento; } set descEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["Carta de Correção","Carta de Correcao"]});
this._descEvento=value } _xCorrecao ; get xCorrecao ( ) { return this._xCorrecao; } set xCorrecao ( value : any ) { validate(value,{"whiteSpace":"preserve","minLength":"15","maxLength":"1000","pattern":"[!-ÿ]{1}[ -ÿ]{0,}[!-ÿ]{1}|[!-ÿ]{1}"});
this._xCorrecao=value } _tpNF ; get tpNF ( ) { return this._tpNF; } set tpNF ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["0","1"]});
this._tpNF=value } _dhRecbto ; get dhRecbto ( ) { return this._dhRecbto; } set dhRecbto ( value : any ) { undefined } _NSU ; get NSU ( ) { return this._NSU; } set NSU ( value : any ) { undefined } } 