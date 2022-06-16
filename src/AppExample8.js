import React from 'react';
function produceFactorial(num)
{
var e,f;
e=f=1;
while(e<=num)
{
f=e*f;
e++;
}
return f;
}



const AppExample8=()=>{

const ClickHandler=()=>{
var Factorial=produceFactorial(5);
//alert will come when the program ends
alert("factorial of 5 is"+Factorial);
}

return(
<div>
<h2>Example 8</h2>
<h2>Atkne Wala example video no.10</h2>
<button type='button' onClick={ClickHandler}>Click Me</button>
</div>
)
}


export default AppExample8;