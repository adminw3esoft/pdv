import {TAmb,TCnpjOpc,TCpf,TChNFe,TDateTimeUTC,TVerAplic,TStat,TMotivo,TProt} from "./TiposBasicoV103Xsd";
import { validate } from "../../Model" ; /* --------
  This is a generated file. All edits will be overwritten! 
-------- */

export const TVerEnvEvento = function ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"1\\.00"}); } 
export const TVerEvento = function ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"1\\.00"}); } 
export const TCOrgaoIBGE = function ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["11","12","13","14","15","16","17","21","22","23","24","25","26","27","28","29","31","32","33","35","41","42","43","50","51","52","53","90"]}); } export class TEvento { _infEvento ; get infEvento ( ) { return this._infEvento; } set infEvento ( value : TEvento_InfEvento ) { this._infEvento=value } _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { undefined } } export class TEvento_InfEvento { _cOrgao ; get cOrgao ( ) { return this._cOrgao; } set cOrgao ( value : any ) { TCOrgaoIBGE(value);
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
 } _tpEvento ; get tpEvento ( ) { return this._tpEvento; } set tpEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{6}","enumeration":["110110"]});
this._tpEvento=value } _nSeqEvento ; get nSeqEvento ( ) { return this._nSeqEvento; } set nSeqEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[1-9]|[1][0-9]{0,1}|20"});
this._nSeqEvento=value } _verEvento ; get verEvento ( ) { return this._verEvento; } set verEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1.00"]});
this._verEvento=value } _detEvento ; get detEvento ( ) { return this._detEvento; } set detEvento ( value : TEvento_InfEvento_DetEvento ) { this._detEvento=value } _Id ; get Id ( ) { return this._Id; } set Id ( value : any ) { validate(value,{"pattern":"ID[0-9]{52}"});
this._Id=value } } export class TEvento_InfEvento_DetEvento { _descEvento ; get descEvento ( ) { return this._descEvento; } set descEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["Carta de Correção","Carta de Correcao"]});
this._descEvento=value } _xCorrecao ; get xCorrecao ( ) { return this._xCorrecao; } set xCorrecao ( value : any ) { validate(value,{"whiteSpace":"preserve","minLength":"15","maxLength":"1000","pattern":"[!-ÿ]{1}[ -ÿ]{0,}[!-ÿ]{1}|[!-ÿ]{1}"});
this._xCorrecao=value } _xCondUso ; get xCondUso ( ) { return this._xCondUso; } set xCondUso ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["A Carta de Correção é disciplinada pelo § 1º-A do art. 7º do Convênio S/N, de 15 de dezembro de 1970 e pode ser utilizada para regularização de erro ocorrido na emissão de documento fiscal, desde que o erro não esteja relacionado com: I - as variáveis que determinam o valor do imposto tais como: base de cálculo, alíquota, diferença de preço, quantidade, valor da operação ou da prestação; II - a correção de dados cadastrais que implique mudança do remetente ou do destinatário; III - a data de emissão ou de saída.","A Carta de Correcao e disciplinada pelo paragrafo 1o-A do art. 7o do Convenio S/N, de 15 de dezembro de 1970 e pode ser utilizada para regularizacao de erro ocorrido na emissao de documento fiscal, desde que o erro nao esteja relacionado com: I - as variaveis que determinam o valor do imposto tais como: base de calculo, aliquota, diferenca de preco, quantidade, valor da operacao ou da prestacao; II - a correcao de dados cadastrais que implique mudanca do remetente ou do destinatario; III - a data de emissao ou de saida."]});
this._xCondUso=value } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1.00"]});
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