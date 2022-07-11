const formatoMoneda = (valor) => {
    return valor.toLocaleString("en-US", {style: "currency", currency:"USD", minimumFractionDigits: 2});
}

let cuotaFija = (monto,tasa,plazo) => {
    let numerador = monto * (tasa / 100);
    let denominador = 1 - (Math.pow((1 + (tasa / 100)), -plazo));
    let cuota = numerador / denominador;
    let amortizacion;
    let interes;

    for (var i = 1; i <= plazo; i++) {

        interes = monto * tasa / 100;
        amortizacion = cuota - interes;
        monto = monto - amortizacion;

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
        console.log("A")
        validacion.innerHTML = "Ingrese los datos completos";
    } else {
        cuotaFija(monto,tasa,plazo);
    }
}
