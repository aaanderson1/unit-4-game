

function getRandom(lowNumber, highNumber) {
    var randomRange = (highNumber - lowNumber);
    var ultimateNumber = Math.floor(Math.random() * randomRange); 
    return ultimateNumber + lowNumber;
}
function reset() {
    var ultimateNumber = getRandom(19, 121);
    var ultimateElement = $("ultimateNumber");
    ultimateElement.text(ultimateNumber);
} 
reset();
