message = "Hello World"

var createHelloWorld = function(message) {

    return function() {
        return message;
    }
};

createHelloWorld("Hello World");