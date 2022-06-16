import React from 'react'

function getData(){
var promise=new Promise((resolve)=>{

fetch("/getstudent").then((response)=>{ return response.json();
}).then((student)=>{resolve(student);
});
});
return promise;
}



const AppExample15=()=>{

const [Student,setStudent]=React.useState([]);


React.useEffect(()=>{
getData().then((student)=>{
setStudent(student);
});
},[])

const [activeMode,setactiveMode]=React.useState("view");

const ItemSelected=function(item){
if(item==='ADD') setactiveMode("add")
if(item==='CANCEL') setactiveMode("view")
}

return (
<div>
<center><h3>thinking machine</h3></center>
<ToolBarCompo Mode={activeMode} ItemSelected={ItemSelected}/>
{activeMode==='view' &&<StudentList Student={Student}/>}
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

const StudentAddComponent=()=>{

const [id,setId]=React.useState(0);
const [idError,setIdError]=React.useState("");



const [name,setName]=React.useState("");
const [nameError,setNameError]=React.useState("");


const [company,setCompany]=React.useState("");
const [companyError,setCompanyError]=React.useState("");




const [salary,setSalary]=React.useState("");
const [salaryError,setSalaryError]=React.useState("");



const [salaryType,setSalaryType]=React.useState("");

const [fullTimeChecked,setFullTimeChecked]=React.useState("checked");
const [internshipChecked,setInternshipChecked]=React.useState("");
const [placementType,setPlacementType]=React.useState("F");




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
if(ev.target.value==="F" && ev.target.checked)
{
setPlacementType("F");
setInternshipChecked("");
setFullTimeChecked("checked");

}
if(ev.target.value==="I" && ev.target.checked)
{
setPlacementType("I");
setInternshipChecked("checked");
setFullTimeChecked("");
}
}



const ClearAllErrors=()=>{
setIdError("");
setNameError("");
setCompanyError("");
setSalaryError("");
}



const saveData=()=>{
ClearAllErrors();
//alert(id+","+name+","+placementType+","+company+","+salary+","+salaryType);
if(id=="" || id<=0) setIdError(" * ");
if(name=="") setNameError(" * ");
if(company=="") setCompanyError(" * ");
if(salary=="" || salary<=0) setSalaryError(" * ");
} 



return(
<div>
<center>
<label htmlFor='id'>ID: </label>
<input type='number' id='id' value={id} onChange={idChanged}/>
<span style={{color:'red'}}>{idError}</span>
<br/>




<label htmlFor='name'>NAME: </label>
<input type='text' id='name' value={name} onChange={nameChanged}/>
<span style={{color:'red'}}>{nameError}</span>
<br/>



PLACEMENT TYPE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<input type='radio' id='fullTime' value='F' name='placementType' onChange={placementTypeChanged}  checked={fullTimeChecked} />FULL TIME &nbsp;&nbsp;&nbsp;&nbsp;

<input type='radio' id='internship' value='I' name='placementType' onChange={placementTypeChanged} checked={internshipChecked} />INTERNSHIP <br/>




<label htmlFor='company'>COMPANY: </label>
<input type='text' id='company' value={company} onChange={companyChanged}/>
<span style={{color:'red'}}>{companyError}</span>
<br/>




<label htmlFor='salary'>SALARY: </label>
<input type='number' id='salary' value={salary} onChange={salaryChanged}/>
<span style={{color:'red'}}>{salaryError}</span>
&nbsp;&nbsp;




<select id='salaryType' onChange={salaryTypeChanged} value={salaryType}>
<option value='PA'>PER ANNUM</option>
<option value='PM'>PER MONTH</option>
</select><br/><br/>

<button type='button' onClick={saveData}>ADD DATA</button>


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

export default AppExample15;


