const newArray = ['One', 'two', "Thr33", "4our", "five"];
console.log(newArray);
console.log(Math.ceil(newArray.length / 2));

let middleIndex = newArray.length / 2;
middleIndex = Math.floor(middleIndex);
const lastIndex = newArray.length - 1;
console.log(newArray[0] + ", " + newArray[middleIndex]  + ", " + newArray[lastIndex])

const mixedDataTypes = [
    '30DaysOfReact',
    '30DaysOfCoolness',
    666,
    999,
    true,
    { country: 'Merica', city: 'Homieville' },
    { skills: ['cool', 'funny', 'thinker'] }
];
console.log(mixedDataTypes);

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies);
console.log(itCompanies.length / 2);

