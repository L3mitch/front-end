//console.log(typeof 5)
//console.log(typeof -5,2)
//console.log(typeof (2,3,4))
//console.log(2+2)
// console.log(4%2)
// console.log('hello' + ' world')
// console.log('hello kfdokp'*5)

//comparações
// console.log(5>2)
// console.log(2 == '2')

// cum
// console.log(2 != 2)
// console.log(2 != '2')
// console.log(2 !== '2')

// console.log(2 == 2 && 2 == 3)
// console.log(2 == 2 || 2 == 3)
// console.log(true)

// if (2 == 2) {
//     var d = 5
//     let e = 6
//     const f = 7
// }
// console.log(d)
// // console.log(e) não pode
// // console.log(f) não pode

// const user = 'homicidio culposo'

// user === 'rodrigo' ? console.log('rodrigo') : console.log('outro')

// let k = 0;
// while (k < 10) {
//     console.log(k)
//     k++
// }

// do {
//     console.log(k)
//     k++
// } while (k < 10)

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break
//     }
//     console.log(i)
// }

// function defineParImpar(numero) {
//     if (numero % 2 === 0) {
//         return 'par'
//     } else {
//         return 'impar'
//     }
// }

// console.log(defineParImpar(5))

const nomes = ['tairine','rodrigo', 'joão', 'maria']
// console.log(nomes[0])
// console.log(nomes[1])
// console.log(nomes[2])
// console.log(nomes.length)//tamanho do array

// const filteredNames = nomes.filter(function (nome) {
//     return nome === 'rodrigo'
// })

const foundName = nomes.find((nome) => nome.length >= 5) 
console.log(foundName)

console.log(nomes.map((nome) => nome.toUpperCase()))

console.log(2**3) //potenciação

//notação de objetos

const pessoa = {
    nome: 'rodrigo',
    idade: 30,
    endereco: {
        rua: 'rua 1',
        numero: 123
    }
}

pessoa.idade = 31

console.log(pessoa)