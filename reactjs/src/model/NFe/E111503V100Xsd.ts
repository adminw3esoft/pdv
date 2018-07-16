import {TProt} from "./TiposBasicoV103Xsd";
import { validate } from "../../Model" ; /* --------
  This is a generated file. All edits will be overwritten! 
-------- */

export const DetEvento = function ( value : any ) { undefined } export class DetEvento { _descEvento ; get descEvento ( ) { return this._descEvento; } set descEvento ( value : any ) { validate(value,{"enumeration":["Cancelamento de Pedido de Prorrogacao","Cancelamento de Pedido de Prorrogação"]});
this._descEvento=value } _idPedidoCancelado ; get idPedidoCancelado ( ) { return this._idPedidoCancelado; } set idPedidoCancelado ( value : any ) { validate(value,{"pattern":"ID[0-9]{52}"});
this._idPedidoCancelado=value } _nProt ; get nProt ( ) { return this._nProt; } set nProt ( value : any ) { TProt(value);
this._nProt=value
 } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1.00"]});
this._versao=value } } 