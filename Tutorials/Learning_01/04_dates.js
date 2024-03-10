let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

// const createdNewDate = new Date(2023, 1, 1)
// const createdNewDate = new Date('2023-01-14')
const createdNewDate = new Date('01-14-2023')
// console.log(createdNewDate.toLocaleString());

const myTimeStamp= Date.now()

// console.log(createdNewDate.getTime())
// console.log(myTimeStamp)
console.log(myDate.toLocaleString('default',{
    // weekday:'long'
    // weekday:'narrow'
    // weekday:'short'
    // dateStyle:'full'
    // dateStyle:'long'
    // dateStyle:'medium'
    // dateStyle:'short'
    // timeStyle:'full'
    // timeStyle:'long'
    // timeStyle:'medium'
    timeStyle:'short'
}));