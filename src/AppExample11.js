import React from 'react';
import Loading from './Gif.gif';
function ProduceFactorial(num)
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


const AppExample11=()=>{

const [Factorial,setFactorial]=React.useState(0);
const [Jobstarted,setJobstarted]=React.useState(false);
const [Processing,setProcessing]=React.useState(false);

const ClickHandler=()=>{
setJobstarted(true);
setProcessing(true);
var prms=ProduceFactorial(5);
prms.then(function(facto){
setFactorial(facto);
setProcessing(false);
})

}



return(
<div>
<h4>Example 11 promise</h4>
<button type="button" onClick={ClickHandler}>Click Me</button>
<br></br>
{Jobstarted===true && Processing===false && "Factorial:"}
{Jobstarted===true && Processing===false && Factorial}
{Jobstarted===true && Processing===true && <img src={Loading}/>}
</div>
)


}


export default AppExample11;