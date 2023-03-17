// myValue = 1;

// function parentFunction(){
//     parentValue = 3;
//     console.log("outer: ", parentValue);
//     return function innerFunction(){
            
//             parentValue += myValue;
//             console.log("inner: ",parentValue);
//     }
// }

// parentFunction()
//     let result = parentFunction()
//     result();
//     result();
//     result();


// annonymous --- instantly invoked function expression
const johnDoe = (() =>{
    console.log("outer");
    return ()=>{
        console.log("inner");
    }
})()();


