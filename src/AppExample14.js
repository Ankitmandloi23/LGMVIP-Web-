import React from 'react';


const getData=()=>{
var promise=new Promise((resolve)=>{
fetch("/placements").then((response)=>{return response.json();}).then((student)=>{
resolve(student);
});
});
return promise;
}


const AppExample14=()=>{

const [student,setstudent]=React.useState([]);

React.useEffect(()=>{
var promise=getData();
promise.then((studt)=>{
setstudent(studt);
});
},[])


const [activeMode,setactiveMode]=React.useState("View");

const OnToolBarSelected=function(item){
if(item==="add") setactiveMode("Add")
if(item==="cancel") setactiveMode("View")
}

return(
<div>
<h3>Thinking machine</h3>
<ToolBarComponent mode={activeMode} SelectedAction={OnToolBarSelected} />
{ activeMode==="View" &&<StudentList student={student}/>}
{ activeMode==="Add" &&<AddStudent />}
</div>
)
}

const ToolBarComponent=({mode,SelectedAction})=>{

const TakeAction=(ev)=>{
SelectedAction(ev.currentTarget.getAttribute("target_action"))
}

return(
<div>
<hr/>
{ mode==="View" &&<button type="button" onClick={TakeAction} target_action="add">ADD</button>}
{ mode==="Add" &&<button type="button" onClick={TakeAction} target_action="cancel">Cancel</button>}
<hr/>
</div>
)
}

const StudentList=({student})=>{
return(
<div>
<ul>
{student.map((student)=>{
return(<li key={student.id}>{student.firstName}</li>)
})}
</ul>
</div>
)
}

const AddStudent=()=>{
return(
<div>
Add student
</div>
)
}

export default AppExample14;