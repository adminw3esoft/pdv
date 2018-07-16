import {TProt,TDec_1104v} from "./TiposBasicoV103Xsd";
import { validate } from "../../Model" ; /* --------
  This is a generated file. All edits will be overwritten! 
-------- */

export const DetEvento = function ( value : any ) { undefined } export class DetEvento { _descEvento ; get descEvento ( ) { return this._descEvento; } set descEvento ( value : any ) { validate(value,{"enumeration":["Pedido de Prorrogação","Pedido de Prorrogacao"]});
this._descEvento=value } _nProt ; get nProt ( ) { return this._nProt; } set nProt ( value : any ) { TProt(value);
this._nProt=value
 } _itemPedido ; get itemPedido ( ) { return this._itemPedido; } set itemPedido ( value : DetEvento_ItemPedido ) { this._itemPedido=value } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1.00"]});
this._versao=value } } export class DetEvento_ItemPedido { _qtdeItem ; get qtdeItem ( ) { return this._qtdeItem; } set qtdeItem ( value : any ) { TDec_1104v(value);
this._qtdeItem=value
 } _numItem ; get numItem ( ) { return this._numItem; } set numItem ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{1,3}"});
this._numItem=value } } 