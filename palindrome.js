//var n;
//var rem=0;
//var temp;
//var a;
//temp=n;
//console.log(temp);
//console.log(n);
function isPalindrome(){
    var n;
var rem=0;
var temp;
var a;
   n=document.getElementById("txt1").valueAsNumber;
    temp=n;
while(n!=0)
{
    a=n%10;
   // console.log(a);
    rem=(rem*10)+a;
   // console.log(rem);
    n=parseInt(n/10);
  //  console.log(n);
}
if(temp==rem)
{
    output="It is a Palindrome";
   document.getElementById('result').value=output;
    console.log("The given number is a palindrome: "+temp);
}
else{
    output="It is not  a Palindrome"
    document.getElementById('result').value=output;
    console.log("The given number is  not a palindrome: "+temp);
}
}
