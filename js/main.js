// stampa in console i numeri da 1 a 100
// se il numero è multiplo di 5 e di 3 stampa "fizzbuzz"
// se il numero è multiplo di 5 stampa "buzz"
// se il numero è multiplo di 3 stampa "fizz"
// altrimenti stampa il numero

const fizz = "Fizz";
const buzz = "Buzz";
const rowEl = document.querySelector('.row')
// console.log(rowEl);

for (let i = 1; i <= 100; i++) {

    const box = document.createElement('div')
    box.classList.add("col-auto")
    box.classList.add("box")
    // se il numero è multiplo di 5 e di 3 stampa "fizzbuzz"
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${fizz}${buzz}`);

        box.classList.add('bg-red')
        box.innerHTML = `${fizz}${buzz}`
    }

    // se il numero è multiplo di 5 stampa "buzz"
    else if (i % 5 == 0) {
        console.log(buzz)
        box.classList.add('bg-yellow')
        box.innerHTML = `${buzz}`

    }

    // se il numero è multiplo di 3 stampa "fizz"
    else if (i % 3 == 0) {
        console.log(fizz)
        box.classList.add('bg-green')
        box.innerHTML = `${fizz}`

    }
    // altrimenti stampa il numero
    else {

        box.classList.add('bg-blue')
        box.innerHTML = `${i}`

        console.log(i)
    }
    rowEl.append(box);
}