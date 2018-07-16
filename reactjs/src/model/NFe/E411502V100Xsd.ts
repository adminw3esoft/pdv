import { validate } from "../../Model" ; /* --------
  This is a generated file. All edits will be overwritten! 
-------- */
export class TRespCancPedido { _statCancPedido ; get statCancPedido ( ) { return this._statCancPedido; } set statCancPedido ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1","2"]});
this._statCancPedido=value } _justStatus ; get justStatus ( ) { return this._justStatus; } set justStatus ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1","2","3","4","5"]});
this._justStatus=value } _justStaOutra ; get justStaOutra ( ) { return this._justStaOutra; } set justStaOutra ( value : any ) { validate(value,{"minLength":"0","maxLength":"1000"});
this._justStaOutra=value } } 
export const DetEvento = function ( value : any ) { undefined } export class DetEvento { _descEvento ; get descEvento ( ) { return this._descEvento; } set descEvento ( value : any ) { validate(value,{"enumeration":["Fisco - Prorrogação ICMS remessa para industrialização","Fisco - Prorrogacao ICMS remessa para industrializacao"]});
this._descEvento=value } _idPedido ; get idPedido ( ) { return this._idPedido; } set idPedido ( value : any ) { validate(value,{"pattern":"ID[0-9]{52}"});
this._idPedido=value } _respCancPedido ; get respCancPedido ( ) { return this._respCancPedido; } set respCancPedido ( value : TRespCancPedido ) { undefined } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1.00"]});
this._versao=value } } 