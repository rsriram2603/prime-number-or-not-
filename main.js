const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;
 if (number > 1) {
    for (let i = 2; i < number; i++) 
	{
        if (number % i == 0) 
		{
            break;
        }
    }

    if (isPrime) {
        console.log("is a prime number");
    } else {
        console.log("is a not prime number");
    }
}
