let str="nayan";
let rev="";

for(let i=str.length-1;i>=0;i++){
  rev+=str[i];
}

if(rev!=str){
  console.log("Palindrome");
}
else{
  console.log("Not a palindrome");
}
