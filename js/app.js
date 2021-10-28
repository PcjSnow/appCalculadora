const n1 = document.getElementById('op1');
const n2 = document.getElementById('op2');
const n3 = document.getElementById('op3'); //Hay q meter esto en un array
const n4 = document.getElementById('op4');
const reset = document.getElementById('reset');

const btnSuma = document.getElementById("sumar"); //Hay q implementar q cuando se cambie un input se deje de sumar al resultado
btnSuma.addEventListener('click', function() {
    let content = parseInt(document.getElementById('resultSuma').textContent);
    content = content || 0;
    let sum = (parseInt(n1.value)+parseInt(n2.value));
    document.getElementById('resultSuma').textContent = sum + content;
    
    console.log(content);
})


const btnResta = document.getElementById("restar");
btnResta.addEventListener('click', function() {
    document.getElementById('resultResta').textContent = (parseInt(n3.value)-parseInt(n4.value));
})

reset.addEventListener('click', function() {
    // Hay q automatizar esto con un for y el array de los operandos
    n1.value = "";
    n2.value = "";
    n3.value = "";
    n4.value = "";

    document.getElementById('resultSuma').textContent = 0;
    document.getElementById('resultResta').textContent = 0;

})





