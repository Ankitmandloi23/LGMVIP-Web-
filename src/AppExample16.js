import React from 'react'

function getData(){
var promise=new Promise((resolve)=>{

fetch("/getstudent").then((response)=>{ return response.json();
}).then((student)=>{resolve(student);
});
});
return promise;
}



const AppExample16=()=>{

const [Student,setStudent]=React.useState([]);


const Fire=()=>{
getData().then((student)=>{
setStudent(student);
});
}


const [activeMode,setactiveMode]=React.useState("view");

const ItemSelected=function(item){
if(item==='ADD') setactiveMode("add")
if(item==='CANCEL') setactiveMode("view")
}

return (
<div>
<center><h3>ANKIT MANDLOI</h3></center>
<ToolBarCompo Mode={activeMode} ItemSelected={ItemSelected}/>
{activeMode==='view' &&<StudentList Student={Student}/>}
{activeMode==='add' &&<StudentAddComponent />}
<center>{activeMode==='view' &&<button type='bytton' onClick={Fire}>GET</button>}</center>
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


const StudentAddComponent=()=>{


const [id,setId]=React.useState("0");
const [idError,setIdError]=React.useState("");

const [name,setName]=React.useState("");
const [nameError,setNameError]=React.useState("");


const [company,setCompany]=React.useState("");
const [companyError,setCompanyError]=React.useState("");

const [salary,setSalary]=React.useState("");
const [salaryError,setSalaryError]=React.useState("");

const [salaryType,setSalaryType]=React.useState("");

const [placementType,setPlacementType]=React.useState("F");

const [internShipChecked,setInternShipChecked]=React.useState("");

const [fullTimeChecked,setFullTimeChecked]=React.useState("checked");



const idChanged=(ev)=>{
setId(ev.target.value);
}

const nameChanged=(ev)=>{
setName(ev.target.value);
}

const companyChanged=(ev)=>{
setCompany(ev.target.value);
}


const salaryChanged=(ev)=>{
setSalary(ev.target.value);
}

const salaryTypeChanged=(ev)=>{
setSalaryType(ev.target.value);
}

const placementTypeChanged=(ev)=>{
if(ev.target.value=="F" && ev.target.checked)
{
setPlacementType("F");
setInternShipChecked("");
setFullTimeChecked("checked");
}
if(ev.target.value=="I" && ev.target.checked)
{
setPlacementType("I");
setInternShipChecked("checked");
setFullTimeChecked("");
}
}

const clearAllError=()=>{

setIdError("");
setNameError("");
setCompanyError("");
setSalaryError("");
}

const ADD=()=>{
clearAllError();
alert(id+","+name+","+company+","+placementType+","+salary+","+salaryType);

if(id=="" || id<=0) setIdError(" * ");
if(name=="") setNameError(" * ");
if(company=="") setCompanyError(" * ");
if(salary=="" || salary<=0) setSalaryError(" * ");


}




return(
<div>
<center>
<label htmlFor='id'>ID : </label>
<input type='number' id='id' value={id}  onChange={idChanged} />
<span style={{color:'red'}}>{idError}</span>
<br></br>

<label htmlFor='name'>NAME : </label>
<input type='text' id='name' onChange={nameChanged} value={name}/>
<span style={{color:'red'}}>{nameError}</span>
<br></br>






PLACEMENT TYPE :


<input type='radio' id='fullTime' name='placementType' value='F'  checked={fullTimeChecked} onChange={placementTypeChanged} />FULL TIME
<input type='radio' id='internShip' name='placementType' value='I' checked={internShipChecked} onChange={placementTypeChanged} />INTERNSHIP

<br></br>






<label htmlFor='company'>COMPANY : </label>
<input type='text' id='company' onChange={companyChanged} value={company}/>
<span style={{color:'red'}}>{companyError}</span>
<br></br>

<label htmlFor='salary'>SALARY : </label>
<input type='number' id='salary' onChange={salaryChanged} value={salary} />&nbsp;&nbsp;
<span style={{color:'red'}}>{salaryError}</span>


<select id='salaryType' onChange={salaryTypeChanged} >
<option value='Y'>PER ANNUM</option>
<option value='M'>PER MONTH</option>
</select><br></br>


<button type='button' onClick={ADD}>ADD</button>

</center>
</div>
)
}

const StudentList=({Student})=>{
return(
<center>
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
</center>
)
}

export default AppExample16;

