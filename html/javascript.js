

function timestable(num1, num2 = 1){
    Number(prompt("enter a number"));
    Number(prompt("enter a number"));
    let result = 1;
    for(let i = 1; i < 10; i++){
        result = result * num1
        console.log(`your result is ${result}`)
    }
}

timestable()



