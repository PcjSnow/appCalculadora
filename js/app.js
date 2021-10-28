const n1 = document.getElementById('sumar-op1');
const n2 = document.getElementById('sumar-op2');
const n3 = document.getElementById('restar-op1'); //Hay q meter esto en un array
const n4 = document.getElementById('restar-op2');
const n5 = document.getElementById('producto-op1');
const n6 = document.getElementById('producto-op2');
const n7 = document.getElementById('dividir-op1');
const n8 = document.getElementById('dividir-op2');
const reset = document.getElementById('reset');

const btnSuma = document.getElementById("sumar"); 
btnSuma.addEventListener('click', function() {
    document.getElementById('resultSuma').textContent = (parseFloat(n1.value)+parseFloat(n2.value));
})


const btnResta = document.getElementById("restar");
btnResta.addEventListener('click', function() {
    document.getElementById('resultResta').textContent = (parseFloat(n3.value)-parseFloat(n4.value));
})


const btnProducto = document.getElementById('producto');
btnProducto.addEventListener('click', function() {
    document.getElementById('resultProducto').textContent = (parseFloat(n5.value)*parseFloat(n6.value));
})


const btnDivision = document.getElementById('dividir');
btnDivision.addEventListener('click', function() {
    document.getElementById('resultDivision').textContent = (parseFloat(n7.value)/parseFloat(n8.value));
})

reset.addEventListener('click', function() {
    // Hay q automatizar esto con un for y el array de los operandos
    n1.value = "";
    n2.value = "";
    n3.value = "";
    n4.value = "";
    n5.value = "";
    n6.value = "";
    n7.value = "";
    n8.value = "";

    document.getElementById('resultSuma').textContent = "";
    document.getElementById('resultResta').textContent = "";
    document.getElementById('resultProducto').textContent = "";
    document.getElementById('resultDivision').textContent = "";

})





