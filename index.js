const chai = chai();
const spies = ("chai-spies");
chai.use(spies);
function receivesAFunction(callback) {
     callback();
    
}
function returnsANamedFunction() {
    return function fn(){
        "returns a function"
}
}

function returnsAnAnonymousFunction(){
    return function() {
        "returns an anonymous function"

    }
}
