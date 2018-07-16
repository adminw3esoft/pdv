import {TIe,TCnpjVar,TCpfVar,TVerAplic,TStat,TMotivo,TCodUfIBGE,TUf,TCodMunIBGE} from "./TiposBasicoV103Xsd";
import { validate } from "../../Model" ; /* --------
  This is a generated file. All edits will be overwritten! 
-------- */

export const TUfCons = function ( value : any ) { validate(value,{"enumeration":["AC","AL","AM","AP","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO","SU"]}); } 
export const TVerConsCad = function ( value : any ) { validate(value,{"pattern":"2\\.00"}); } export class TConsCad { _infCons ; get infCons ( ) { return this._infCons; } set infCons ( value : TConsCad_InfCons ) { this._infCons=value } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class TConsCad_InfCons { _xServ ; get xServ ( ) { return this._xServ; } set xServ ( value : any ) { validate(value,{"enumeration":["CONS-CAD"]});
this._xServ=value } _UF ; get UF ( ) { return this._UF; } set UF ( value : any ) { TUfCons(value);
this._UF=value
 } _IE ; get IE ( ) { return this._IE; } set IE ( value : any ) { TIe(value);
this._IE=value
 } _CNPJ ; get CNPJ ( ) { return this._CNPJ; } set CNPJ ( value : any ) { TCnpjVar(value);
this._CNPJ=value
 } _CPF ; get CPF ( ) { return this._CPF; } set CPF ( value : any ) { TCpfVar(value);
this._CPF=value
 } } export class TRetConsCad { _infCons ; get infCons ( ) { return this._infCons; } set infCons ( value : TRetConsCad_InfCons ) { this._infCons=value } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class TRetConsCad_InfCons { _verAplic ; get verAplic ( ) { return this._verAplic; } set verAplic ( value : any ) { TVerAplic(value);
this._verAplic=value
 } _cStat ; get cStat ( ) { return this._cStat; } set cStat ( value : any ) { TStat(value);
this._cStat=value
 } _xMotivo ; get xMotivo ( ) { return this._xMotivo; } set xMotivo ( value : any ) { TMotivo(value);
this._xMotivo=value
 } _UF ; get UF ( ) { return this._UF; } set UF ( value : any ) { TUfCons(value);
this._UF=value
 } _IE ; get IE ( ) { return this._IE; } set IE ( value : any ) { TIe(value);
this._IE=value
 } _CNPJ ; get CNPJ ( ) { return this._CNPJ; } set CNPJ ( value : any ) { TCnpjVar(value);
this._CNPJ=value
 } _CPF ; get CPF ( ) { return this._CPF; } set CPF ( value : any ) { TCpfVar(value);
this._CPF=value
 } _dhCons ; get dhCons ( ) { return this._dhCons; } set dhCons ( value : any ) { undefined } _cUF ; get cUF ( ) { return this._cUF; } set cUF ( value : any ) { TCodUfIBGE(value);
this._cUF=value
 } _infCad ; get infCad ( ) { return this._infCad; } set infCad ( value : TRetConsCad_InfCons_InfCad ) { this._infCad=value } } export class TRetConsCad_InfCons_InfCad { _IE ; get IE ( ) { return this._IE; } set IE ( value : any ) { TIe(value);
this._IE=value
 } _CNPJ ; get CNPJ ( ) { return this._CNPJ; } set CNPJ ( value : any ) { TCnpjVar(value);
this._CNPJ=value
 } _CPF ; get CPF ( ) { return this._CPF; } set CPF ( value : any ) { TCpfVar(value);
this._CPF=value
 } _UF ; get UF ( ) { return this._UF; } set UF ( value : any ) { TUf(value);
this._UF=value
 } _cSit ; get cSit ( ) { return this._cSit; } set cSit ( value : any ) { validate(value,{"enumeration":["0","1"]});
this._cSit=value } _indCredNFe ; get indCredNFe ( ) { return this._indCredNFe; } set indCredNFe ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["0","1","2","3","4"]});
this._indCredNFe=value } _indCredCTe ; get indCredCTe ( ) { return this._indCredCTe; } set indCredCTe ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["0","1","2","3","4"]});
this._indCredCTe=value } _xNome ; get xNome ( ) { return this._xNome; } set xNome ( value : any ) { validate(value,{"minLength":"1","maxLength":"60"});
this._xNome=value } _xFant ; get xFant ( ) { return this._xFant; } set xFant ( value : any ) { validate(value,{"minLength":"1","maxLength":"60"});
this._xFant=value } _xRegApur ; get xRegApur ( ) { return this._xRegApur; } set xRegApur ( value : any ) { validate(value,{"minLength":"1","maxLength":"60"});
this._xRegApur=value } _CNAE ; get CNAE ( ) { return this._CNAE; } set CNAE ( value : any ) { validate(value,{"pattern":"[0-9]{6,7}"});
this._CNAE=value } _dIniAtiv ; get dIniAtiv ( ) { return this._dIniAtiv; } set dIniAtiv ( value : any ) { undefined } _dUltSit ; get dUltSit ( ) { return this._dUltSit; } set dUltSit ( value : any ) { undefined } _dBaixa ; get dBaixa ( ) { return this._dBaixa; } set dBaixa ( value : any ) { undefined } _IEUnica ; get IEUnica ( ) { return this._IEUnica; } set IEUnica ( value : any ) { TIe(value);
this._IEUnica=value
 } _IEAtual ; get IEAtual ( ) { return this._IEAtual; } set IEAtual ( value : any ) { TIe(value);
this._IEAtual=value
 } _ender ; get ender ( ) { return this._ender; } set ender ( value : any ) { undefined } } export class TEndereco { _xLgr ; get xLgr ( ) { return this._xLgr; } set xLgr ( value : any ) { validate(value,{"minLength":"1","maxLength":"255"});
this._xLgr=value } _nro ; get nro ( ) { return this._nro; } set nro ( value : any ) { validate(value,{"maxLength":"60","minLength":"1"});
this._nro=value } _xCpl ; get xCpl ( ) { return this._xCpl; } set xCpl ( value : any ) { validate(value,{"maxLength":"60","minLength":"1"});
this._xCpl=value } _xBairro ; get xBairro ( ) { return this._xBairro; } set xBairro ( value : any ) { validate(value,{"maxLength":"60","minLength":"1"});
this._xBairro=value } _cMun ; get cMun ( ) { return this._cMun; } set cMun ( value : any ) { TCodMunIBGE(value);
this._cMun=value
 } _xMun ; get xMun ( ) { return this._xMun; } set xMun ( value : any ) { validate(value,{"maxLength":"60","minLength":"1"});
this._xMun=value } _CEP ; get CEP ( ) { return this._CEP; } set CEP ( value : any ) { validate(value,{"pattern":"[0-9]{7,8}"});
this._CEP=value } } 