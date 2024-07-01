const arrayOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(first2Drivers) {
    return first2Drivers.slice(0, 2);
}
returnFirstTwoDrivers(arrayOfDrivers);

const returnLastTwoDrivers = function(last2Drivers) {
    return last2Drivers.slice(2, 4)
}

returnLastTwoDrivers(arrayOfDrivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(fareAmount) {
        return fareAmount * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(arrayOfDrivers, selectingDrivers) {
    return selectingDrivers(arrayOfDrivers);
}
