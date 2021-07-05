function getSleepHours(day) {
    switch (day) {
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 7;
            break;
        case 'wednesday':
            return 6;
            break;
        case 'thursday':
            return 5;
            break;
        case 'friday':
            return 4;
            break;
        case 'saturday':
            return 3;
            break;
        case 'sunday':
            return 2;
            break;
        default:
            return 'error';
    }
};

function getActualSleepHours() {
    getSleepHours('monday') + getSleepHours('tuesday') +
        getSleepHours('wednesday') +
        getSleepHours('thursday') +
        getSleepHours('friday') +
        getSleepHours('saturday') +
        getSleepHours('sunday');
};

function getIdealSleepHours() {
    const idealHours = 8;
    return idealHours * 7;
};

function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got more sleep than needed.');
    } else {
        console.log('You should get some rest.');
    }
};
calculateSleepDebt();

//Right exercice