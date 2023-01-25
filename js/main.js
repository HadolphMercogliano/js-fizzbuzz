// stampa in console i numeri da 1 a 100
// se il numero è multiplo di 5 e di 3 stampa "fizzbuzz"
// se il numero è multiplo di 5 stampa "buzz"
// se il numero è multiplo di 3 stampa "fizz"
// altrimenti stampa il numero




for (let i = 1; i <= 100; i++) {

    // se il numero è multiplo di 5 e di 3 stampa "fizzbuzz"
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    }

    // se il numero è multiplo di 5 stampa "buzz"
    else if (i % 5 == 0) {
        console.log('Buzz')
    }

    // se il numero è multiplo di 3 stampa "fizz"
    else if (i % 3 == 0) {
        console.log('Fizz')
    }

    // altrimenti stampa il numero
    else {
        console.log(i)
    }
}