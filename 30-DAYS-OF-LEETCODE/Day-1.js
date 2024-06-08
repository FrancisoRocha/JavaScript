// ! Create Hello World Function
var createHelloWorld = function() {

    return function(argun) {
        argun = "Hello World"
        return argun;
    }
};

let helloWorld = createHelloWorld() // llama a la funcion de createHelloWorld
console.log(helloWorld()); //imprime el mensaje