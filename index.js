function Monday() {
  exerciseRoutine(liftWeights);
}

function Tuesday() {
  console.log("Go for a five-mile run");
  console.log("Swim 40 laps");
}

function Wednesday() {
  console.log("Go for a five-mile run");
  console.log("Go for a five-mile run");
}

function Thursday() {
  console.log("Go for a five-mile run");
  console.log("Pump iron");
}

function Friday() {
  console.log("Go for a five-mile run");
  console.log("Swim 40 laps");
}

function runFiveMiles() {
  console.log("Go for a five-mile run");
}

function liftWeights() {
  console.log("Pump iron");
}

function swimFortyLaps() {
  console.log("Swim 40 laps");
}

function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

// exerciseRoutine( () => console.log("Stretch! Work that core!") );

function morningRoutine(exercise) {
    let breakfast;

    if (exercise === liftWeights) {
        breakfast = "protein bar";
    } else if (exercise === swimFortyLaps) {
        breakfast = "kale smoothie";
    } else {
        breakfast = "granola";
    }

    exerciseRoutine(exercise);

    return function() {
        console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    };
}

// morningRoutine(liftWeights);

const afterExercise = morningRoutine(liftWeights);
// afterExercise();

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