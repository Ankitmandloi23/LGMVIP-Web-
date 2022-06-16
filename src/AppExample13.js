import React from 'react';

//data from srever
const getData=()=>{
var promise=new Promise((resolve)=>{
fetch("/placements").then((response)=>{return response.json();
}).then((employees)=>{resolve(employees);
});
});
return promise;
}






const AppExample13=()=>{

const [studentL,setstudent]=React.useState([]);



React.useEffect(()=>{
var promise=getData();
promise.then((studList)=>{
setstudent(studList);
});
},[])





const [firstT]=React.useState("Thinking machine- LIST");
const [YearT]=React.useState(2021);

return(
<div>
<Title firstT={firstT} Year={YearT}/>
<StudentListComponent studentL={studentL}/>
</div>
)
}





const Title=({firstT,Year})=>{
return(
<div>
<h3>{firstT}-{Year}</h3>
</div>
)
}


const StudentListComponent=({studentL})=>{
return(
<div>
<ul>
{
studentL.map((student)=>{
return(<li key={student.id}>{student.firstName}</li>)
})}
</ul>
</div>

)

}





export default AppExample13;