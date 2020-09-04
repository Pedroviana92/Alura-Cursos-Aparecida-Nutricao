
import {Cliente} from "./Cliente.js"
import {contaCorrente} from "./contaCorrente.js"

var cliente1 = new Cliente("Pedro", 11114232610)



var contaPedro = new contaCorrente(1001, 5000, cliente1)

console.log(cliente1)
console.log(contaPedro)