import {validate} from "../../Model" ;
/* --------
 This is a generated file. All edits will be overwritten!
-------- */

export const TCodUfIBGE = function (value: any) {
    validate(value, {
        "whiteSpace": "preserve",
        "enumeration": ["11", "12", "13", "14", "15", "16", "17", "21", "22", "23", "24", "25", "26", "27", "28", "29", "31", "32", "33", "35", "41", "42", "43", "50", "51", "52", "53"]
    });
}
export const TCodMunIBGE = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{7}"});
}
export const TChNFe = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "maxLength": "44", "pattern": "[0-9]{44}"});
}
export const TProt = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "maxLength": "15", "pattern": "[0-9]{15}"});
}
export const TRec = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "maxLength": "15", "pattern": "[0-9]{15}"});
}
export const TStat = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "maxLength": "3", "pattern": "[0-9]{3}"});
}
export const TCnpj = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "maxLength": "14", "pattern": "[0-9]{14}"});
}
export const TCnpjVar = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "maxLength": "14", "pattern": "[0-9]{3,14}"});
}
export const TCnpjOpc = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "maxLength": "14", "pattern": "[0-9]{0}|[0-9]{14}"});
}
export const TCpf = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "maxLength": "11", "pattern": "[0-9]{11}"});
}
export const TCpfVar = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "maxLength": "11", "pattern": "[0-9]{3,11}"});
}
export const TDec_0104v = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "pattern": "0|0\\.[0-9]{1,4}|[1-9]{1}(\\.[0-9]{1,4})?"});
}
export const TDec_0204v = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "pattern": "0|0\\.[0-9]{1,4}|[1-9]{1}[0-9]{0,1}(\\.[0-9]{1,4})?"});
}
export const TDec_0302a04 = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "pattern": "0|0\\.[0-9]{2,4}|[1-9]{1}[0-9]{0,2}(\\.[0-9]{2,4})?"});
}
export const TDec_0302a04Opc = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "pattern": "0\\.[0-9]{2,4}|[1-9]{1}[0-9]{0,2}(\\.[0-9]{2,4})?"});
}
export const TDec_0302Max100 = function (value: any) {
    validate(value, {
        "whiteSpace": "preserve",
        "pattern": "0(\\.[0-9]{2})?|100(\\.00)?|[1-9]{1}[0-9]{0,1}(\\.[0-9]{2})?"
    });
}
export const TDec_0304Max100 = function (value: any) {
    validate(value, {
        "whiteSpace": "preserve",
        "pattern": "0(\\.[0-9]{4})?|100(\\.00)?|[1-9]{1}[0-9]{0,1}(\\.[0-9]{4})?"
    });
}
export const TDec_0302a04Max100 = function (value: any) {
    validate(value, {
        "whiteSpace": "preserve",
        "pattern": "0(\\.[0-9]{2,4})?|[1-9]{1}[0-9]{0,1}(\\.[0-9]{2,4})?|100(\\.0{2,4})?"
    });
}
export const TDec_0803v = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "pattern": "0|0\\.[0-9]{3}|[1-9]{1}[0-9]{0,7}(\\.[0-9]{1,3})?"});
}
export const TDec_1104 = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "pattern": "0|0\\.[0-9]{4}|[1-9]{1}[0-9]{0,10}(\\.[0-9]{4})?"});
}
export const TDec_1104v = function (value: any) {
    validate(value, {
        "whiteSpace": "preserve",
        "pattern": "0|0\\.[0-9]{1,4}|[1-9]{1}[0-9]{0,10}|[1-9]{1}[0-9]{0,10}(\\.[0-9]{1,4})?"
    });
}
export const TDec_1104Opc = function (value: any) {
    validate(value, {
        "whiteSpace": "preserve",
        "pattern": "0\\.[1-9]{1}[0-9]{3}|0\\.[0-9]{3}[1-9]{1}|0\\.[0-9]{2}[1-9]{1}[0-9]{1}|0\\.[0-9]{1}[1-9]{1}[0-9]{2}|[1-9]{1}[0-9]{0,10}(\\.[0-9]{4})?"
    });
}
export const TDec_1110v = function (value: any) {
    validate(value, {
        "whiteSpace": "preserve",
        "pattern": "0|0\\.[0-9]{1,10}|[1-9]{1}[0-9]{0,10}|[1-9]{1}[0-9]{0,10}(\\.[0-9]{1,10})?"
    });
}
export const TDec_1203 = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "pattern": "0|0\\.[0-9]{3}|[1-9]{1}[0-9]{0,11}(\\.[0-9]{3})?"});
}
export const TDec_1204 = function (value: any) {
    validate(value, {
        "whiteSpace": "preserve",
        "pattern": "0|0\\.[0-9]{1,4}|[1-9]{1}[0-9]{0,11}|[1-9]{1}[0-9]{0,11}(\\.[0-9]{4})?"
    });
}
export const TDec_1204v = function (value: any) {
    validate(value, {
        "whiteSpace": "preserve",
        "pattern": "0|0\\.[0-9]{1,4}|[1-9]{1}[0-9]{0,11}|[1-9]{1}[0-9]{0,11}(\\.[0-9]{1,4})?"
    });
}
export const TDec_1204Opc = function (value: any) {
    validate(value, {
        "whiteSpace": "preserve",
        "pattern": "0\\.[0-9]{1,4}|[1-9]{1}[0-9]{0,11}|[1-9]{1}[0-9]{0,11}(\\.[0-9]{1,4})?"
    });
}
export const TDec_1204temperatura = function (value: any) {
    validate(value, {
        "whiteSpace": "preserve",
        "pattern": "0\\.[1-9]{1}[0-9]{3}|0\\.[0-9]{3}[1-9]{1}|0\\.[0-9]{2}[1-9]{1}[0-9]{1}|0\\.[0-9]{1}[1-9]{1}[0-9]{2}|[1-9]{1}[0-9]{0,11}(\\.[0-9]{4})?"
    });
}
export const TDec_1302 = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "pattern": "0|0\\.[0-9]{2}|[1-9]{1}[0-9]{0,12}(\\.[0-9]{2})?"});
}
export const TDec_1302Opc = function (value: any) {
    validate(value, {
        "whiteSpace": "preserve",
        "pattern": "0\\.[0-9]{1}[1-9]{1}|0\\.[1-9]{1}[0-9]{1}|[1-9]{1}[0-9]{0,12}(\\.[0-9]{2})?"
    });
}
export const TIeDest = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "maxLength": "14", "pattern": "ISENTO|[0-9]{2,14}"});
}
export const TIeDestNaoIsento = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "maxLength": "14", "pattern": "[0-9]{2,14}"});
}
export const TIeST = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "maxLength": "14", "pattern": "[0-9]{2,14}"});
}
export const TIe = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "maxLength": "14", "pattern": "[0-9]{2,14}|ISENTO"});
}
export const TMod = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "enumeration": ["55", "65"]});
}
export const TNF = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "pattern": "[1-9]{1}[0-9]{0,8}"});
}
export const TSerie = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "pattern": "0|[1-9]{1}[0-9]{0,2}"});
}
export const TUf = function (value: any) {
    validate(value, {
        "whiteSpace": "preserve",
        "enumeration": ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO", "EX"]
    });
}
export const TUfEmi = function (value: any) {
    validate(value, {
        "whiteSpace": "preserve",
        "enumeration": ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"]
    });
}
export const TAmb = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "enumeration": ["1", "2"]});
}
export const TVerAplic = function (value: any) {
    validate(value, {"minLength": "1", "maxLength": "20"});
}
export const TMotivo = function (value: any) {
    validate(value, {"maxLength": "255", "minLength": "1"});
}
export const TJust = function (value: any) {
    validate(value, {"minLength": "15", "maxLength": "255"});
}
export const TServ = function (value: any) {
    validate(value, {});
}
export const Tano = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{2}"});
}
export const TMed = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "pattern": "[0-9]{1,4}"});
}
export const TString = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "pattern": "[!-ÿ]{1}[ -ÿ]*[!-ÿ]{1}|[!-ÿ]{1}"});
}
export const TData = function (value: any) {
    validate(value, {
        "whiteSpace": "preserve",
        "pattern": "(((20(([02468][048])|([13579][26]))-02-29))|(20[0-9][0-9])-((((0[1-9])|(1[0-2]))-((0[1-9])|(1\\d)|(2[0-8])))|((((0[13578])|(1[02]))-31)|(((0[1,3-9])|(1[0-2]))-(29|30)))))"
    });
}
export const TTime = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "pattern": "(([0-1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9])"});
}
export const TDateTimeUTC = function (value: any) {
    validate(value, {
        "whiteSpace": "preserve",
        "pattern": "(((20(([02468][048])|([13579][26]))-02-29))|(20[0-9][0-9])-((((0[1-9])|(1[0-2]))-((0[1-9])|(1\\d)|(2[0-8])))|((((0[13578])|(1[02]))-31)|(((0[1,3-9])|(1[0-2]))-(29|30)))))T(20|21|22|23|[0-1]\\d):[0-5]\\d:[0-5]\\d([\\-,\\+](0[0-9]|10|11):00|([\\+](12):00))"
    });
}
export const TPlaca = function (value: any) {
    validate(value, {"whiteSpace": "preserve", "pattern": "[A-Z]{2,3}[0-9]{4}|[A-Z]{3,4}[0-9]{3}"});
}
export const TCOrgaoIBGE = function (value: any) {
    validate(value, {
        "whiteSpace": "preserve",
        "enumeration": ["11", "12", "13", "14", "15", "16", "17", "21", "22", "23", "24", "25", "26", "27", "28", "29", "31", "32", "33", "35", "41", "42", "43", "50", "51", "52", "53", "90", "91", "92"]
    });
}