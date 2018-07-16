import { validate } from "../../Model" ; /* --------
  This is a generated file. All edits will be overwritten! 
-------- */

export const TNSU = function ( value : any ) { validate(value,{"pattern":"[0-9]{15}"}); } 
export const TQNSU = function ( value : any ) { validate(value,{"minInclusive":"1","maxInclusive":"50"}); } 
export const TVerDistDFe = function ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1.00"]}); } 
export const TAmb = function ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1","2"]}); } 
export const TCodUfIBGE = function ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["11","12","13","14","15","16","17","21","22","23","24","25","26","27","28","29","31","32","33","35","41","42","43","50","51","52","53"]}); } 
export const TCOrgaoIBGE = function ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["11","12","13","14","15","16","17","21","22","23","24","25","26","27","28","29","31","32","33","35","41","42","43","50","51","52","53","90","91","92"]}); } 
export const TCnpj = function ( value : any ) { validate(value,{"whiteSpace":"preserve","maxLength":"14","pattern":"[0-9]{14}"}); } 
export const TCpf = function ( value : any ) { validate(value,{"whiteSpace":"preserve","maxLength":"11","pattern":"[0-9]{11}"}); } 
export const TVerAplic = function ( value : any ) { validate(value,{"minLength":"1","maxLength":"20"}); } 
export const TStat = function ( value : any ) { validate(value,{"whiteSpace":"preserve","maxLength":"3","pattern":"[0-9]{3}"}); } 
export const TMotivo = function ( value : any ) { validate(value,{"maxLength":"255","minLength":"1"}); } 
export const TString = function ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[!-ÿ]{1}[ -ÿ]{0,}[!-ÿ]{1}|[!-ÿ]{1}"}); } 
export const TChNFe = function ( value : any ) { validate(value,{"whiteSpace":"preserve","maxLength":"44","pattern":"[0-9]{44}"}); } 
export const TProt = function ( value : any ) { validate(value,{"whiteSpace":"preserve","maxLength":"15","pattern":"[0-9]{15}"}); } 
export const TDateTimeUTC = function ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"(((20(([02468][048])|([13579][26]))-02-29))|(20[0-9][0-9])-((((0[1-9])|(1[0-2]))-((0[1-9])|(1\\d)|(2[0-8])))|((((0[13578])|(1[02]))-31)|(((0[1,3-9])|(1[0-2]))-(29|30)))))T(20|21|22|23|[0-1]\\d):[0-5]\\d:[0-5]\\d([\\-,\\+](0[0-9]|10|11):00|([\\+](12):00))"}); } 
export const TIe = function ( value : any ) { validate(value,{"whiteSpace":"preserve","maxLength":"14","pattern":"[0-9]{2,14}|ISENTO"}); } 
export const TDec_1302 = function ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"0|0\\.[0-9]{2}|[1-9]{1}[0-9]{0,12}(\\.[0-9]{2})?"}); } 