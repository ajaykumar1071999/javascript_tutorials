const obj = {
    username: 'Ajay',
    age: 24,
    wlcmMsg: function () {
        console.log(`${this.username}, welcome in the website`)
        console.log(this)
    },
    // msg:this.username
}
obj.username = 'Deeksha'
// obj.wlcmMsg()
// console.log(this)

// function aj(){
//     const obj1={
//         name:'ajay',
//         age:25,
//         msg:this.name
//     }
// console.log(obj1.msg)
// }
// aj();

// const obj1={
//     name:'ajay',
//     age:25,
//     msg:this.name
// }

// console.log(obj1)

// const newfunc=()=>{
//     const username='Ajay Kumar';
//     // console.log(this)
//     console.log(this.username)
// }
// newfunc()


// const newFunc1=(num)=>{
//     return num+1
// }

// const newFunc1 = (num) => num + 1 // This is implicit return (In this we can return statement in single line)


// const newFunc1 = (num) => ({num : 1})
// console.log(newFunc1(3))

