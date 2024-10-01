function prepareIngredients(callback) {
    setTimeout(() => {
        console.log("Ingredients prepared.");
        callback();
    }, 2000);
}

function cookMeal(callback) {
    setTimeout(() => {
        console.log("Meal cooked.");
        callback();
    }, 3000);
}

prepareIngredients(() => {
    cookMeal(() => {
        console.log("Meal is ready to eat!");
    });
});


// Using Promise
function prepareIngredients() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Ingredients prepared.");
            resolve();
        }, 2000);
    });
}

function cookMeal() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Meal cooked.");
            resolve();
        }, 3000);
    });
}

function startCooking() {
    prepareIngredients()
        .then(cookMeal)
        .then(() => {
            console.log("Meal is ready to eat!");
        });
}

startCooking();
