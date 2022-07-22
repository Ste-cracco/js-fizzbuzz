
const grigliaElement = document.querySelector('.griglia');

for(let i=0; i<100; i++) {
    let numero = i+1;
    
    if (numero % 3 === 0 && numero % 5 == 0) {
        numero = 'FizzBuzz';     
    } 
    else if (numero % 5 === 0) {
        numero = 'buzz';   
    }    
    else if (numero % 3 === 0) {
        numero = 'fizz';
    }  
    console.log(numero)

    // const divElement = document.createElement('div')
    // divElement.append(number)
    // divElement.classList.add('cella')

    // grigliaElement.append(divElement)

    grigliaElement.innerHTML += `<div class="cella"> ${numero} </div>`
}
