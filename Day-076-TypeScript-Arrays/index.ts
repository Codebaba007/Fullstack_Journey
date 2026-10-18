const studentNames: (string | null)[] = [
    "Rahim",
    "Nusrat",
    "Tanvir"
];

const passedStudents: boolean[] = [
    true,
    true,
    false
];

studentNames.push("Tahsin");

console.log(studentNames);
console.log(passedStudents);
const ages: number[] = [17, 21, 19, 16, 25];

const adultAges: number[] = ages.filter((ages) => ages >= 18);
const doubleAges: number[] = ages.map((ages) => ages * 2);
const everyAdult: boolean = ages.every((ages) => ages >= 18);
console.log(adultAges);
console.log(doubleAges);
console.log(everyAdult);