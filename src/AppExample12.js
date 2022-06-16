import React from 'react';

const getdata=()=>{
const promise=new Promise((resolve)=>{


fetch("/placements").then((response)=>{ return response.json();
}).then((employees)=>{resolve(employees)
});

});
return promise;
}





const AppExample12=()=>{

const promise=getdata().then(function(employees){
alert(JSON.stringify(employees));
});



return(
<div>
<h2>Thinking machine</h2>
</div>
)
}





export default AppExample12;