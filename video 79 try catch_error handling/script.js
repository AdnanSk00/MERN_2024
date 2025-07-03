let a = prompt("Enter a number")

let b = prompt("Enter second number")

// let sum = a + b;

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b);

// ---------------------Error Handling---------------------

function main(){

    let x = 1;
    try {
        console.log("The sum is ", sum*x);
        return true
        
    } catch (error) {
        console.log("Error aa gaya bhai");
        // alert(error.name)
        // alert(error.message)
        // alert(error.stack)
        return false
    }
    // console.log("files are being closed and db connection is being closed");
    finally{
        console.log("files are being closed and db connection is being closed");
    }
}

let c = main()

// NOTE :-  Here main() assigned in variable c therefor we wrote return true or return false in trye & catch. Every fuction() stops its execution after return statement but here despite of return our finally block is executing which can not be done using console.log() after return statement.

// As we know that if we want to run the code after return statement in any func() so we can't do that but finally{} is used to execute the code despite(ke bawajood) of return statement. 
