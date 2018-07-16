import { validate } from "../../Model" ; /* --------
  This is a generated file. All edits will be overwritten! 
-------- */

export const DetEvento = function ( value : any ) { undefined } export class DetEvento { _descEvento ; get descEvento ( ) { return this._descEvento; } set descEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["Desconhecimento da Operacao"]});
this._descEvento=value } _xJust ; get xJust ( ) { return this._xJust; } set xJust ( value : any ) { validate(value,{"whiteSpace":"preserve","minLength":"15","maxLength":"255","pattern":"[!-ÿ]{1}[ -ÿ]{0,}[!-ÿ]{1}|[!-ÿ]{1}"});
this._xJust=value } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1.00"]});
this._versao=value } } 