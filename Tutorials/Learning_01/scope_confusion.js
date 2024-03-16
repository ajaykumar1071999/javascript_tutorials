function test() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }
}

// function test() {
//     for (let i = 0; i < 5; i++) {
//         setTimeout(function() {
//             console.log(i);
//         }, 1000);
//     }
// }


// test();


function outer() {
    var x = 10;
    function inner() {
        console.log(x);
    }
    return inner;
    x = 20;
}

// var foo = outer();
// foo();

function outer() {
    var x = 10;
    // if (true) {
    //     // var x = 20;
    //    let x=20;
    //     console.log(x);
    // }
    function inner(){
        x=20;
        console.log(x)
    }
    console.log(x);
    return inner;
}
// var foo=outer();
// foo();


var x = 10;

function outer() {
    console.log(x);
    var x = 20;
}

outer();
