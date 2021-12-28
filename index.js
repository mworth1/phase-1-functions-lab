const headQ = 42
let street;
let blocks;
let feet;
let streetStart;
let streetEnd;
let price;

function distanceFromHqInBlocks(street) {
    if (street < headQ) {
        blocks = (headQ - street);
    } else if (street > headQ) {
        blocks = (street - headQ);
    }
    return blocks;
}

function distanceFromHqInFeet(street) {
    feet = (distanceFromHqInBlocks(street) * 264);
    return feet;
}

function distanceTravelledInFeet(streetStart, streetEnd) {
    if (streetStart < streetEnd) {
        feet = (streetEnd - streetStart) * 264;
    } else if (streetStart > streetEnd) {
        feet = (streetStart - streetEnd) * 264;
    }
    return feet;
}

function calculatesFarePrice(streetStart, streetEnd) {
    if (distanceTravelledInFeet(streetStart, streetEnd) <= 400) {
        price = 0;
    } else if ((distanceTravelledInFeet(streetStart, streetEnd) > 400) && (distanceTravelledInFeet(streetStart, streetEnd) <= 2000)) {
        price = (distanceTravelledInFeet(streetStart, streetEnd) - 400) * 0.02;
    } else if ((distanceTravelledInFeet(streetStart, streetEnd) > 2000) && (distanceTravelledInFeet(streetStart, streetEnd) < 2500)) {
        price = 25;
    } else if (distanceTravelledInFeet(streetStart, streetEnd) > 2500) {
        price = 'cannot travel that far';
    }
    return price;
}