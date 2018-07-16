import { validate } from "../../Model" ; /* --------
  This is a generated file. All edits will be overwritten! 
-------- */

export const ProcEventoNFe = function ( value : any ) { undefined } export class ProcEventoNFe { _evento ; get evento ( ) { return this._evento; } set evento ( value : ProcEventoNFe_Evento ) { this._evento=value } _retEvento ; get retEvento ( ) { return this._retEvento; } set retEvento ( value : ProcEventoNFe_RetEvento ) { this._retEvento=value } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{2}\\.[0-9]{2}"});
this._versao=value } } export class ProcEventoNFe_Evento { _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } } export class ProcEventoNFe_RetEvento { _undefined ; get undefined ( ) { return this._undefined; } set undefined ( value : any ) { undefined } } 