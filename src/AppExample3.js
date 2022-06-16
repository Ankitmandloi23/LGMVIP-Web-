import React from 'react';



const AppExample3=()=>{
const students=[

{"id":"101","name":"Ankit","company":"Groww","salary":"10 LPA"},
{"id":"102","name":"Saloni","company":"Facebook","salary":"12 LPA"},
{"id":"103","name":"Shivani","company":"Infoysis","salary":"13 LPA"},{"id":"104","name":"Priya","company":"Across","salary":"14 LPA"}

];


const [Heading]=React.useState("PlacementList");
const [Year]=React.useState(2021);

const [SearchWhat,setSearchWhat]=React.useState("NONE");

const ApplyFilter=(ev)=>{
setSearchWhat(ev.target.value);
if(ev.currentTarget.value.length===0)
{
setSearchWhat("NONE");
return;
}
}

const FilteredStudents=students.filter((student)=>{
if(SearchWhat==="NONE") return true;
return student.company.toLowerCase().includes(SearchWhat.toLowerCase());
})


const [SelectedStudent,setSelectedStudent]=React.useState("");

const onSelect=(student)=>{
setSelectedStudent(student)
}

return(
<div>
<h3>Thinking Machine</h3>
<Title Head={Heading} Year={Year}/><br></br>
<SearchBox OnSearch={ApplyFilter} />
On Search: <b>{SearchWhat}</b>
<PlacementList students={FilteredStudents} onSelect={onSelect}/><br></br>
<PlacementDetail student={SelectedStudent}/>
</div>
)
}

const Title=(props)=>{
return(
<div>
{props.Head}-{props.Year}
</div>
)
}


const SearchBox=(props)=>{

const SearchIt=(ev)=>{
props.OnSearch(ev)
}


return(
<div>
<label htmlFor='sb'>Search</label>
<input type='text' id='sb'onChange={SearchIt}/>
</div>
)
}


const PlacementList=(props)=>{

const ClickHandler=(ev)=>{
var student=null;
var StudentId=ev.currentTarget.getAttribute("id");
for(var i=0; i<props.students.length; i++)
{
if(props.students[i].id==StudentId)
{
student=props.students[i];
break;
}
}

if(student)
{
props.onSelect(student)
}
}


return(
<ul>
{props.students.map((student)=>{
return(<li key={student.id} id={student.id} onClick={ClickHandler}>{student.name} ({student.company})</li>)
})}
</ul>
)
}

const PlacementDetail=(props)=>{
return(
<div>
Name:{props.student.name}<br></br>
Company:{props.student.company}<br></br>
Salery:{props.student.salary}
</div>
)
}
export default AppExample3;