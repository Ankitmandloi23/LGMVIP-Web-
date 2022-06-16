import React from 'react';


const Titles=[
"We teach more then we promises",
"Hello World how are you",
"What are you Doing",
"Everything is going to out of Control"
];

const AppExample4=()=>{





const [TitleIndex,setTitleIndex]=React.useState(0);

const Change=()=>{
if(TitleIndex==Titles.length-1) setTitleIndex(0);
else
setTitleIndex(TitleIndex+1)
} 

const ADD=()=>{
alert(Titles.length);
Titles.push("Ye Wala KARA ADD mene");
alert(Titles.length)
}

return(
<div>
<h3 onClick={Change}>{Titles[TitleIndex]}</h3>
<h3 onClick={ADD}>Thinking Machines</h3>
</div>
)
}

export default AppExample4;