

function receivesAFunction(cb) {
    cb();
    return "It doesn't matter what this function returns.";
}


// const returnsANamedFunction = () => receivesAFunction;

function returnsANamedFunction() {
    return receivesAFunction;
}

function returnsAnAnonymousFunction() {
    return function () {};
}