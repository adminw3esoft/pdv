import {TVerAplic,TDateTimeUTC,TDec_1104v} from "./TiposBasicoV103Xsd";
import { validate } from "../../Model" ; /* --------
  This is a generated file. All edits will be overwritten! 
-------- */

export const DetEvento = function ( value : any ) { undefined } export class DetEvento { _descEvento ; get descEvento ( ) { return this._descEvento; } set descEvento ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["Averbação para Exportação","Averbacao para Exportacao"]});
this._descEvento=value } _tpAutor ; get tpAutor ( ) { return this._tpAutor; } set tpAutor ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["6"]});
this._tpAutor=value } _verAplic ; get verAplic ( ) { return this._verAplic; } set verAplic ( value : any ) { TVerAplic(value);
this._verAplic=value
 } _itensAverbados ; get itensAverbados ( ) { return this._itensAverbados; } set itensAverbados ( value : DetEvento_ItensAverbados ) { this._itensAverbados=value } _versao ; get versao ( ) { return this._versao; } set versao ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1\\.00"]});
this._versao=value } } export class DetEvento_ItensAverbados { _dhEmbarque ; get dhEmbarque ( ) { return this._dhEmbarque; } set dhEmbarque ( value : any ) { TDateTimeUTC(value);
this._dhEmbarque=value
 } _dhAverbacao ; get dhAverbacao ( ) { return this._dhAverbacao; } set dhAverbacao ( value : any ) { TDateTimeUTC(value);
this._dhAverbacao=value
 } _nDue ; get nDue ( ) { return this._nDue; } set nDue ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{14}"});
this._nDue=value } _nItem ; get nItem ( ) { return this._nItem; } set nItem ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{1,3}"});
this._nItem=value } _nItemDue ; get nItemDue ( ) { return this._nItemDue; } set nItemDue ( value : any ) { validate(value,{"whiteSpace":"preserve","pattern":"[0-9]{1,3}"});
this._nItemDue=value } _qItem ; get qItem ( ) { return this._qItem; } set qItem ( value : any ) { TDec_1104v(value);
this._qItem=value
 } _motAlteracao ; get motAlteracao ( ) { return this._motAlteracao; } set motAlteracao ( value : any ) { validate(value,{"whiteSpace":"preserve","enumeration":["1","2","3"]});
this._motAlteracao=value } } 