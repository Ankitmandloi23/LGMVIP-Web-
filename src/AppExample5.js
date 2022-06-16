import React from 'react';

const Titles=[
"Thinking Machine",
"We teach more than we promises to teach",
"Think Big-beyond 20-30 lpa",
"Progamming is cool"
];


const AppExample5=()=>{



const [TitleIndex,setTitleIndex]=React.useState(0);
const ChangeTitle=()=>{
if(TitleIndex==Titles.length-1) setTitleIndex(0);
else setTitleIndex(TitleIndex+1);
}

const DoSomething=()=>{
alert(Titles.length);
Titles.push("Cooool");
alert(Titles.length);
}



return(
<div>
<h2 onClick={ChangeTitle}>{Titles[TitleIndex]}</h2>
<h3 onClick={DoSomething}>current Title from index:{TitleIndex}</h3>
</div>
);
}




export default AppExample5;