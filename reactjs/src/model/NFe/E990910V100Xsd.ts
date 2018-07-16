import {TDateTimeUTC} from "./TiposBasicoV103Xsd";
import { validate } from "../../Model" ; /* --------
  This is a generated file. All edits will be overwritten! 
-------- */

export const DetEvento = function ( value : any ) { undefined } export class DetEvento { _descEvento ; get descEvento ( ) { return this._descEvento; } set descEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["Confirmacao de Internalizacao da Mercadoria na SUFRAMA"]});
this._descEvento=value } _PINe ; get PINe ( ) { return this._PINe; } set PINe ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{1,9}"});
this._PINe=value } _dVistoria ; get dVistoria ( ) { return this._dVistoria; } set dVistoria ( value : any ) { TDateTimeUTC(value);
this._dVistoria=value
 } _locVistoria ; get locVistoria ( ) { return this._locVistoria; } set locVistoria ( value : any ) { validate(value,{"minLength":"5","maxLength":"60"});
this._locVistoria=value } _postoVistoria ; get postoVistoria ( ) { return this._postoVistoria; } set postoVistoria ( value : any ) { validate(value,{"minLength":"5","maxLength":"60"});
this._postoVistoria=value } _xHistorico ; get xHistorico ( ) { return this._xHistorico; } set xHistorico ( value : any ) { validate(value,{"minLength":"1","maxLength":"1024"});
this._xHistorico=value } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1.00"]});
this._versao=value } } 