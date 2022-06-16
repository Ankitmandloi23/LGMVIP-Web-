import React from 'react';

const AppExample6=()=>{

const [activeMode,setactiveMode]=React.useState("View");

const OnToolBarSelected=function(item){
if(item==="add") setactiveMode("Add")
if(item==="cancel") setactiveMode("View")
}

return(
<div>
<h3>Thinking machine</h3>
<ToolBarComponent mode={activeMode} SelectedAction={OnToolBarSelected} />
{ activeMode==="View" &&<StudentList />}
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

const StudentList=()=>{
return(
<div>
StudentsList
</div>
)
}

const AddStudent=()=>{
return(
<div>
ADDStudent
</div>
)
}

export default AppExample6;