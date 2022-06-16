import React from 'react'



var setDataForServer=(student)=>{
var promise=new Promise((resolve)=>{
var dataString=`id=${student.id}&name=${encodeURIComponent(student.name)}&jobType=${student.jobType}&company=${encodeURIComponent(student.company)}&salary=${student.salary}&salaryType=${encodeURIComponent(student.salaryType)}`;
fetch("/getPostStudent",{
"method":"POST",
"headers":{
"content-Type":"application/x-www-form-urlencoded"
},
"body":dataString
}).then((response)=>{
return response.json();
}).then((responsejson)=>{resolve(responsejson);
});
});
return promise;
}







var getData=()=>{

var promise=new Promise((resolve)=>{
setTimeout(()=>{
fetch("/getStudents").then((response)=>{
return response.json();
}).then((dataE)=>{resolve(dataE);
});
},1000)
});
return promise;
}



const AppIntern=()=>{

const [employeesData,setEmployeesData]=React.useState([]);


React.useEffect(()=>{
const p=getData().then((data)=>{
setEmployeesData(data)
});

},[]);



const [activeMode,setActiveMode]=React.useState("view");

const onClickStudent=(data)=>{
if(data==='add') 
{
setActiveMode("add");
}
if(data==='cancel')
{
setActiveMode("view");
}
}






return(
<div>
<center><h4>Thinking MAchine</h4></center>
{<ToolBarComponent mode={activeMode} onClickStudent={onClickStudent}/>}
{activeMode==='view' &&<StudentsComponent employeesData={employeesData}/>}
{activeMode==='add' &&<StudentsDetailsComponent />}
{activeMode==='add' &&<SAddComponent />}
</div>
)
}




const SAddComponent=()=>{

const [id,setId]=React.useState(0);

const [name,setName]=React.useState("");

const [company,setCompany]=React.useState("");

const [salary,setSalary]=React.useState(0);


const [fullTimeChecked,setFullTimeChecked]=React.useState('checked');
const [internShipChecked,setInternShipChecked]=React.useState("");
const [placementType,setPlacementType]=React.useState("F");

const [salaryType,setSalaryType]=React.useState("y");


const [idError,setIdError]=React.useState("");
const [nameError,setNameError]=React.useState("");
const [companyError,setCompanyError]=React.useState("");
const [salaryError,setSalaryError]=React.useState("");







const idChanged=(ev)=>{
setId(ev.target.value)
}

const nameChanged=(ev)=>{
setName(ev.target.value)
}

const companyChanged=(ev)=>{
setCompany(ev.target.value)
}

const salaryChanged=(ev)=>{
setSalary(ev.target.value)
}


const salaryTypeChanged=(ev)=>{
setSalaryType(ev.target.value);
}



const placementTypeChanged=(ev)=>{
if(ev.target.value=='F' && ev.target.checked)
{
setPlacementType("F");
setFullTimeChecked("checked");
setInternShipChecked("");
}
if(ev.target.value=='I' && ev.target.checked)
{

setPlacementType("I");
setFullTimeChecked("");
setInternShipChecked("checked");
}
}

const clearAllErrors=()=>{
setIdError("");
setNameError("");
setCompanyError("");
setSalaryError("");
}



const saveData=()=>{
clearAllErrors();
var hasError=false;
if(id=="" || id<=0)
{
setIdError(" * ");
hasError=true;
}
if(name=="")
{
setNameError(" * ");
hasError=true;
} 
if(company=="")
{
setCompanyError(" * ");
hasError=true;
} 
if(salary=="" || salary<=0)
{
setSalaryError(" * ");
hasError=true;
} 
if(hasError==true)
{
return;
}
else
{
var student={
    id:"id",
    name:"name",
    company:"company",
    jobType:"jobType",
    salary:"salary",
    salaryType:"salaryType"
}
var promise=setDataForServer(student);
promise.then((data)=>{
if(data.success==true) 
{
alert("ADDED!!");
}
else
{
alert("some error");          
}
}
)}


return(
<div>
<label htmlFor='id'>ID :</label>
<input type='number' id='id' value={id} onChange={idChanged}/>
<span style={{color:'red'}}>{idError}</span>
<br/>

<label htmlFor='name'>NAME :</label>
<input type='text' id='name' value={name} onChange={nameChanged}/>
<span style={{color:'red'}}>{nameError}</span>
<br/>

<label htmlFor='company'>COMPANY :</label>
<input type='text' id='company' value={company} onChange={companyChanged}/>
<span style={{color:'red'}}>{companyError}</span>
<br/>

<label htmlFor='salary'>SALARY :</label>
<input type='number' id='salary' value={salary} onChange={salaryChanged}/>
<span style={{color:'red'}}>{salaryError}</span>
<br/>

Placement Type :&nbsp;&nbsp;
<input type='radio' id='fullTime' name='placementType' checked={fullTimeChecked} onChange={placementTypeChanged} value='F'/>
FULL-TIME 
<input type='radio' id='internShip'name='placementType' checked={internShipChecked} onChange={placementTypeChanged} value='I'/>
INTERN-SHIP
<br/>
Salary Type :
<select id='salaryType' value={salaryType} onChange={salaryTypeChanged}>
<option value='y'>Per-Annum</option>
<option value='m'>Per-Month</option>
</select><br/>

<button type='button' onClick={saveData}>SAVE</button>
</div>
)
}












const ToolBarComponent=({mode,onClickStudent})=>{

const takeAction=(ev)=>{
onClickStudent(ev.currentTarget.getAttribute("take_action"));
}

return(
<div>
{mode==='view' &&<button type='button' take_action='add' onClick={takeAction}>FRONT DATA </button>}
{mode==='add' &&<button type='button' take_action='cancel' onClick={takeAction}>BACK DATA </button>}
</div>
)
}










const StudentsComponent=({employeesData})=>{
return(
<div>
{
employeesData.map((student)=>{
return(<>
ID:{student.id}<br></br>
NAME:{student.name}<br></br>
COMPANY:{student.company}<br></br>
SALARY:{student.salary}<br></br>
SALARYTYPE:{student.salaryType}<br></br>
jobType:{student.jobType}<br></br>
<hr></hr>
</>
)
})
}
</div>
)
}

const StudentsDetailsComponent=()=>{
return(
<div>
<h5>StUDENTS can ADD HERE!!!!!.....welcome</h5>
</div>
)
} 

export default AppIntern;