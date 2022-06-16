import React from 'react'


//for the send new students record

const addStudents=(student)=>{
var promise=new Promise((resolve)=>{
var dataString=`id=${student.id}&name=${encodeURIComponent(student.name)}&jobType=${student.jobType}&company={student.company}&salary=${student.salary}&salaryType=${student.salaryType}`;
fetch("/addPlacement",{
"method":"POST",
"headers":{
"content-Type":"application/x-www-form-urlencoded"
},
"body":dataString
}).then((response)=>{
return response.json();
}).then((responseJ)=>{
resolve(responseJ);
});


});
return promise;
}







//for the get data from server

function getData(){
var promise=new Promise((resolve)=>{
fetch("/getstudent").then((response)=>{ return response.json();
}).then((student)=>{resolve(student);
});
});
return promise;
}




const AppExample17=()=>{


const getButton()=>{

alert("d");    
}
const ggg=getData()
ggg.then((student)=>{
setStudent(student);
});




const [Student,setStudent]=React.useState([]);



const [activeMode,setactiveMode]=React.useState("view");

const ItemSelected=function(item){
if(item==='ADD') setactiveMode("add")
if(item==='CANCEL') setactiveMode("view")
}

return (
<div>
<center><h3>ANKIT MANDLOI</h3></center>
<ToolBarCompo Mode={activeMode} ItemSelected={ItemSelected}/>
<center>{activeMode==='view' &&<StudentList Student={Student}/>}</center>
{activeMode==='add' &&<StudentAddComponent />}
</div>
)
}

const ToolBarCompo=({Mode,ItemSelected})=>{
const TakeAction=(ev)=>{
ItemSelected(ev.target.getAttribute("target_action"));
}

return(
<div>
<center>
{Mode==='view' &&<button type='button' onClick={TakeAction} target_action='ADD'>ADD</button>}
{Mode==='add' &&<button type='button' onClick={TakeAction} target_action='CANCEL'>CANCEL</button>}<br/><br/>
</center>
</div>
)
}


const StudentList=({Student})=>{
return(
<div>
{
Student.map((student)=>{
return(<li key={student.id}><br></br>
<h4>
ID: {student.id}<br></br>
NAME: {student.name} <br></br>
COMPANY: {student.company} <br></br>
SALARY: {student.salary}<br></br> 
SALARYTYPE: {student.salaryType} 
</h4>
<hr></hr></li>)
})
}
</div>
)
}

xport default AppExample17;

