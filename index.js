

function receivesAFunction(cb) {
    cb();
    return "It doesn't matter what this function returns.";
}


function returnsANamedFunction() {
    return receivesAFunction;
}

function returnsAnAnonymousFunction() {
    return function () {};
}