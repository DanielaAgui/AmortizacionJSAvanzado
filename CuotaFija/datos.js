class Datos{
    constructor(monto, plazo, tasa){
        this._monto = monto;
        this._plazo = plazo;
        this._tasa = tasa;
    }
    get monto(){
        return this._monto;
    }
    set monto(monto){
        this._monto = monto;
    }
    get plazo(){
        return this._plazo;
    }
    set plazo(plazo){
        this._plazo = plazo;
    }
    get tasa(){
        return this._tasa;
    }
    set tasa(tasa){
        this._tasa = tasa;
    }
}
