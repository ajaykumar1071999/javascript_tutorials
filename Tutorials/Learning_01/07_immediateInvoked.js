(function newFunc(){
    console.log('hello Ajay');
}());

(function newFunc1(){
    console.log('hello Ajay two');
}());

(()=>{
    console.log('with arrow function')
})();

((name)=>{
    console.log(`with arrow function ${name}`)
})('Ajay Kumar');