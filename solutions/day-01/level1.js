const newArray = ['One', 'two', "Thr33", "4our", "five"];
console.log(newArray);
console.log(newArray.length);

const lastIndex = newArray.length - 1;
console.log(newArray[0] + ", " + newArray[2]  + ", " + newArray[lastIndex])

const mixedDataTypes = [
    '30DaysOfReact',
    666,
    true,
    { country: 'Merica', city: 'Homieville' },
    { skills: 'cool', 'funny', 'thinker' }
];
console.log(mixedDataTypes);