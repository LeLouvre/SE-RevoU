// let submitForm = document.getElementById("submitForm");
// submitForm.addEventListener("submit",)
var BMI

function submitData(){
    // let jenisKelamin = document.getElementsBy("jenis-kelamin");
    let jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked').value;
    console.log(jenisKelamin);

    let beratBadan = document.getElementById("berat-badan").value;
    let usia = document.getElementById("usia").value;
    let tinggiBadan = document.getElementById("tinggi-badan").value;
    BMI = beratBadan/(tinggiBadan*tinggiBadan);
    let nilaiBMI = BMI.toFixed(1);

    // document.getElementById("BMI").innerHTML = nilaiBMI;
    console.log(nilaiBMI);


    if(nilaiBMI<=18.5){
        document.getElementById("KetBBatas").innerHTML = "Berat Badan Kurang";
        document.getElementById("BMI").innerHTML = nilaiBMI;
        document.getElementById("KetBBbawah").innerHTML = "Berat Badan Anda Tergolong Kurang";
    }
    else if (nilaiBMI<=24.9) {
        document.getElementById("KetBBatas").innerHTML = "Berat Badan Normal";
        document.getElementById("BMI").innerHTML = nilaiBMI;
        document.getElementById("KetBBbawah").innerHTML = "Berat Badan Anda Tergolong Normal";   
    } 
    else if (nilaiBMI<=29.9) {
        document.getElementById("KetBBatas").innerHTML = "Berat Badan Berlebih";
        document.getElementById("BMI").innerHTML = nilaiBMI;
        document.getElementById("KetBBbawah").innerHTML = "Berat Badan Anda Tergolong Berlebih";   
    } 
    else {
        document.getElementById("KetBBatas").innerHTML = "Berat Badan Obesitas";
        document.getElementById("BMI").innerHTML = nilaiBMI;
        document.getElementById("KetBBbawah").innerHTML = "Berat Badan Anda Tergolong Obesitas";   
    }
}
