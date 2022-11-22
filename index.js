// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function beforeEach(){
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
};

function destructivelyAppendCat(){
    cats.push("Ralph");
};
console.log(cats);

function destructivelyPrependCat(){
    cats.unshift("Bob");
};
console.log(cats);

function destructivelyRemoveLastCat(){
    cats.pop();
};
console.log(cats);

function destructivelyRemoveFirstCat(){
    cats.shift();
};
console.log(cats);

function appendCat(){
    return [...cats, "Broom"];
};

function prependCat(){
    return ["Arnold", ...cats];
};

function removeLastCat(){
    return cats.slice(0,2);
};

function removeFirstCat(){
    return cats.slice(1);
};
