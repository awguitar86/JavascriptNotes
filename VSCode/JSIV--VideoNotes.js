/* CLOSURES - WHY ARE THEY USEFUL? */
// Closures can help us keep data secure

function  bankAccount (startingBalance) {
    var balance = startingBalance;
    return function (action, amount) {
        if(action === 'withdraw'){
            balance -= acount;
        }else if(action === 'deposit'){
            balance += amount;
        }
        return balance;
    }
}

myAccount = bankAccount(100);
myAccount('deposit', 300);

// Closures can help us make multiple copies (instances) from the same starting code
function animalPasture(){
    var animal = 1;  // Closures keep data secure - the rest of the code can only interact with those variable in ways that you define.
    return function(){
        return ++animal; // Closures allow you to create multiple trackab;e independent states.
    }
}
var sheepPasture = animalPasture();
var cowPasture = animalPasture();
sheepPasture();
sheepPasture();
cowPasture();

//Closures can help us remember things when using callbacks or other asynchronus code patterns.
var supplyList = ['shovel', 'wheelbarrow', 'fence', 'honey', 'socks'];

function getSuppliesFromTown (supplyList) {
    for(var i =0; i < supplyList.length; i++){
        function memoryClosure(supplyIndex){
            goGetFromTown(supplyList[supplyIndex], function(){
                supplyList[supplyIndex] === //correct value
            })
        }
        memryClosure(i)
    }
}