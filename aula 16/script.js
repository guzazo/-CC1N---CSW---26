function calcular() {
let num1 = window.document.getElementById('num1').value;
let num2 = window.document.getElementById('num2').value;
let res = window.document.getElementById('res');
let resultado = num1 - num2;
res.innerHTML = `A idade é ${resultado} anos.`;
if (resultado >= 18) {
    res.innerHTML += `<p> Você é maior de idade. Ja pode tirar a carteira de motorista.</p>`;
    } else {
    res.innerHTML += `<p> Você é menor de idade. Ainda não pode tirar a carteira de motorista.</p>`;
}
}