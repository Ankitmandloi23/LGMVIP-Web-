import React from 'react';
function produceFactorial(num)
{
var p=new Promise(function(resolve){
setTimeout(function(){
var e,f;
e=f=1;
while(e<=num)
{
f=e*f;
e++;
}
resolve(f);
},20000)
})
return p;
}



const AppExample10=()=>{

const ClickHandler=()=>{
//USE PROMISE video no.10

var prms=produceFactorial(5);
prms.then(function(facto){
alert("factorail is"+facto);
}) 
alert("factorial is being produced");
}

return(
<div>
<h3>Eaxmple v.10</h3>
<button type='button' onClick={ClickHandler}>Click Me</button>
</div>

)


}


export default AppExample10;