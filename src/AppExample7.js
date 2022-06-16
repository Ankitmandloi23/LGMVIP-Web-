import React from 'react';


class students
{
constructor(id,name,company,salary)
{
this.id=id;
this.name=name;
this.company=company;
this.salary=salary;
}
getId()
{
return this.id;
}
getName()
{
return this.name;
}
getCompany()
{
return this.company;
}
getSalary()
{
return this.salary;

const Students=[];

Students.push(new student(101,"Ankit","Grow","10 LPA"));
Students.push(new student(102,"Suman","Infoysis","14 LPA"));
Students.push(new student(103,"Amit","Cognizent","12 LPA"));





const AppExample7=()=>{




const [activeMode,setactiveMode]=React.useState("View");

const OnToolBarSelected=function(item){
if(item==="add") setactiveMode("Add")
if(item==="cancel") setactiveMode("View")
}

return(
<div>
<h3>Thinking machine Students</h3>
<ToolBarComponent mode={activeMode} SelectedAction={OnToolBarSelected} />
{ activeMode==="View" &&<StudentList Students={Students} />}
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
<span>Name: {student.name}</span><br></br>
<span>Company: {student.company}</span><br></br>
<span>Salary: {student.salary}</span><br></br>
<hr/></div>
)}

const AddStudent=()=>{

const Addstudent=()=>
{
var id=document.getElementById("id").value;
var name=document.getElementById("name").value;
var company=document.getElementById("company").value;
var salary=document.getElementById("salary").value;
for(var x=0; x<Students.length;x++)
{
if(Students[x].id===id)
{
alert("SAME Id")

return;
}
}
Students.push(new student(id,name,company,salary));
}


return(
<div>
ADDStudent


<b>ADD ID</b> <input type='text' id='id'/><br></br>

<b>ADD NAME</b> <input type='text' id='name'/><br></br>

<b>ADD COMPANY</b> <input type='text' id='company' /><br></br>

<b>ADD SALARY</b> <input type='text'id='salary' /><br></br>

<button type='button' onClick={Addstudent}>ADD NEW STUDENT</button>

</div>
)
}

export default AppExample7;