
const grigliaElement = document.querySelector('.griglia');

for(let i=0; i<100; i++) {
    let numero = i+1;
    const divElement = document.createElement('div');    
    divElement.classList.add('cella');
    
    if (numero % 3 === 0 && numero % 5 == 0) {
        numero = 'FizzBuzz';
        divElement.classList.add('multiplo_3_e_5');
    } 
    else if (numero % 5 === 0) {  
        numero = 'Buzz';
        divElement.classList.add('multiplo_5');
    }    
    else if (numero % 3 === 0) {
        numero = 'Fizz';
        divElement.classList.add('multiplo_3');
    } 
    
    divElement.append(numero);
    grigliaElement.append(divElement);   

    // Metodo "BackTick"
    // grigliaElement.innerHTML += `<div class="cella"> ${numero} </div>`   

}

