//Correction in Palindrome

let str="nayan";
let rev="";

for(let i=str.length-1;i>=0;i--){
  rev+=str[i];
}

if(rev==str){
  console.log("Palindrome");
}
else{
  console.log("Not a palindrome");
}



// Correction in Prime

let num=5;
let count=0;
for(let i=1;i<=num;i++)
  {
    if(num%i==0)
    {
      count++;
    }
  }
  if(count==2)
  {
    console.log(num,"is a prime number");
  }
  else
  {
    console.log(num,"is NOT a prime number");
  }
}