import React from 'react';
import './App.css';

class students
{
constructor(id,name,company,salary)
{
this.id=id;
this.name=name;
this.company=company;
this.salary=salary;
}
}
const Students=[];

Students.push(new students(101,"Ankit","Grow","10 LPA"));
Students.push(new students(102,"Suman","Infoysis","14 LPA"));
Students.push(new students(103,"Amit","Cognizent","12 LPA"));




const AppExample21=()=>{




const [activeMode,setactiveMode]=React.useState("View");

const OnToolBarSelected=function(item){
if(item==="add") setactiveMode("Add")
if(item==="cancel") setactiveMode("View")
}

return(
<div>
    <center>
<h3>Task-3 (LetsGrowMore)</h3>
<ToolBarComponent mode={activeMode} SelectedAction={OnToolBarSelected} />

{ activeMode==="View" &&<StudentList Students={Students} />}
{activeMode==="View" &&<h5>YOU CAN ADD MORE OVER HERE...BY click Button (ADD)!!</h5>}
{ activeMode==="Add" &&<AddStudent />}
</center>
<div class="intro">ankitmandloi23@gmail.com</div>
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
{ mode==="View" &&<button type="button" onClick={TakeAction} target_action="add" class="button">ADD</button>}
{ mode==="View" &&<div className='enrS'>Enrolled Students</div>}
{ mode==="Add" &&<button type="button" onClick={TakeAction} target_action="cancel" class="button">Cancel</button>}
<hr/>
</div>
)
}

const StudentList=({Students})=>{
return(
<div>
{Students.map((student)=>{
return(
<StudentListComponent key={student.id} student={student} />
)
})}
</div>
)
}

const StudentListComponent=({student})=>{
return(
<div>
<h6>Id: {student.id}</h6>
<h6>Name: {student.name}</h6>
<h6>Company: {student.company}</h6>
<h6>Salary: {student.salary}</h6>
<hr/>
</div>
)}

const AddStudent=()=>{

    


    
const Addstudent=()=>
{
var id=document.getElementById("id").value;
var name=document.getElementById("name").value;
var company=document.getElementById("company").value;
var salary=document.getElementById("salary").value;
if(id=="" || id<=0)
{
alert("please fill Id");
return;
}
if(name=="")
{
alert("please fill NAME");
return;
}
if(company=="")
{
alert("please fill COMPANY");
return;
}
if(salary=="" && salary<=0)
{
alert("please fill SALARY");
return;
}
for(var x=0; x<Students.length;x++)
{
if(Students[x].id===id)
{
alert("SAME Id")

return;
}
}
Students.push(new students(id,name,company,salary));
alert("Student has been added! You can check the form by cancel button");
}


return(
<div>
AddStudent!!!!!
<br></br>
<br></br>
<b>ID :-</b> <input type='text' id='id' /><br></br>


<b>NAME :-</b> <input type='text' id='name'/><br></br>

<b>COMPANY :-</b> <input type='text' id='company' /><br></br>

<b>SALARY :-</b> <input type='text'id='salary' /><br></br>
<br></br>
<button type='button' onClick={Addstudent}>ADD NEW STUDENT</button>


</div>
)
}

export default AppExample21;