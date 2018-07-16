import { validate } from "../../Model" ; /* --------
  This is a generated file. All edits will be overwritten! 
-------- */

export const DetEvento = function ( value : any ) { undefined } export class DetEvento { _descEvento ; get descEvento ( ) { return this._descEvento; } set descEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["Vistoria SUFRAMA"]});
this._descEvento=value } _PINe ; get PINe ( ) { return this._PINe; } set PINe ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{1,9}"});
this._PINe=value } _dVistoria ; get dVistoria ( ) { return this._dVistoria; } set dVistoria ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"(((20(([02468][048])|([13579][26]))-02-29))|(20[0-9][0-9])-((((0[1-9])|(1[0-2]))-((0[1-9])|(1\\d)|(2[0-8])))|((((0[13578])|(1[02]))-31)|(((0[1,3-9])|(1[0-2]))-(29|30)))))T(20|21|22|23|[0-1]\\d):[0-5]\\d:[0-5]\\d-0[1-4]:00"});
this._dVistoria=value } _locVistoria ; get locVistoria ( ) { return this._locVistoria; } set locVistoria ( value : any ) { validate(value,{"minLength":"5","maxLength":"60"});
this._locVistoria=value } _postoVistoria ; get postoVistoria ( ) { return this._postoVistoria; } set postoVistoria ( value : any ) { validate(value,{"minLength":"5","maxLength":"60"});
this._postoVistoria=value } _xHistorico ; get xHistorico ( ) { return this._xHistorico; } set xHistorico ( value : any ) { validate(value,{"minLength":"1","maxLength":"1024"});
this._xHistorico=value } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1.00"]});
this._versao=value } } 