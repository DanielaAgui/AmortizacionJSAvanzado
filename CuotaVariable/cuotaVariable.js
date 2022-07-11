const formatoMoneda = (valor) => {
    return valor.toLocaleString("en-US", {style: "currency", currency:"USD", minimumFractionDigits: 2});
}

let cuotaVariable = (monto,tasa,plazo) => {
    
    let amortizacion = monto / plazo;

    for (let i = 1; i <= plazo; i++) {
        
        monto;
        let interes = monto * (tasa / 100);
        let cuota = amortizacion + interes;
        monto -= amortizacion;

        document.getElementById("periodo").innerHTML = "Período";
        document.getElementById("interes").innerHTML = "Interés";
        document.getElementById("amortizacion").innerHTML = "Amortización";
        document.getElementById("cuota").innerHTML = "Cuota";
        document.getElementById("saldo").innerHTML = "Saldo";

        document.getElementById("valor_periodo").innerHTML += `${i} <br />`;
        document.getElementById("valor_interes").innerHTML += `${formatoMoneda(interes)} <br />`;
        document.getElementById("valor_amortizacion").innerHTML += `${formatoMoneda(amortizacion)} <br />`;
        document.getElementById("valor_cuota").innerHTML += `${formatoMoneda(cuota)} <br />`;
        document.getElementById("valor_saldo").innerHTML += `${formatoMoneda(monto)} <br />`;
    }
}

let calcularCuota = () => {
    let forma = document.getElementById("forma");
    let monto = forma["monto"].value;
    let plazo = forma["plazo"].value;
    let tasa = forma["tasa"].value;
    let validacion = document.getElementById("validador");

    if (monto.length === 0 || plazo.length === 0 || tasa.length === 0){
        validacion.innerHTML = "Ingrese los datos completos";
    } else {
        cuotaVariable(monto,tasa,plazo);
    }
}










// var amortizacion = monto / plazo;

// const formateador = new Intl.NumberFormat("en", { style: "currency", "currency": "COP" });

// document.write(" Período  Interés  Amortización  Cuota  Saldo <br>");

// for (let i = 1; i <= plazo; i++) {
//     monto;
//     var interes = monto * (tasa / 100);
//     var cuota = amortizacion + interes;
//     monto -= amortizacion;
//     document.write(i + "---" + interes.toFixed(2) + "---" + amortizacion.toFixed(2) + "---" + cuota.toFixed(2) + "---" + monto.toFixed(2) + "<br>");
// }