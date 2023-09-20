var num;
let isPrime = true;
var num = prompt("Enter your number:");
num= parseInt(num);
if(num%2==0){
    console.log(num + "this is even number");
}
else{
    console.log(num + "is odd number");
}

if (num< 2) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(num + " is a prime number.");
} else {
  console.log(num + " is not a prime number.");
}




