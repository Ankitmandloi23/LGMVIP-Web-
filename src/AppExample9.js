import React from 'react';
function producefactorial(num,address)
{
setTimeout(function(){
var e,f;
e=f=1;
while(e<=num)
{
f=e*f;
e++;
}
address(f)
},20000)
}




const AppExample9=()=>{

const ClickHandler=()=>{
producefactorial(5,function(facto){
alert("Factorial is"+facto);
});
alert("Factorial is being Produced");
}

return(
<div>
<h3>Example 9 adresss k bharose call kr lega</h3>
<button type='button' onClick={ClickHandler}>Click me</button>
</div>


)

}


export default AppExample9;