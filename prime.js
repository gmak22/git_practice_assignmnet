let num=5;
let count=0;
for(i=1;i<num;i++)
  {
    if(num%i==0)
    {
      count++;
    }
  }
  if(count==1)
  {
    console.log(num,"is a prime number");
  }
  else
  {
    console.log(num,"is NOT a prime number");
  }
}
