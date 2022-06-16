import React,{Component,useRef} from 'react';

class student
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
}
}

function AppExample2(){

const students=[];
const placementYear=2021;

students.push(new student(101,"Ankit","Groww","19 LPA"));
students.push(new student(102,"Aniket","www","15 LPA"));
students.push(new student(103,"Sumit","cdgww","18 LPA"));
students.push(new student(104,"Amit","Addww","17 LPA"));

const FilteredStudent=[];

students.forEach((student)=>{
FilteredStudent.push(student)
});


const placementListRef=useRef();
const DetailRef=useRef();

const onStudentIsSelected=function(student)
{
DetailRef.current.updatestudents(student);
}

const SelectedStudent={
Name:"",
COMPANY:"",
SALARY:""
}




const SearchCriteria=(ev)=>{
var SearchWhat=ev.currentTarget.value.trim().toLowerCase();
FilteredStudent.splice(0,FilteredStudent.length)
for(var l=0; l<students.length; l++)
{
if(students[l].company.toLowerCase().includes(SearchWhat))
{
FilteredStudent.push(students[l]);
}
}
placementListRef.current.updateStudent(FilteredStudent);
}




return(
<div>
<h2>THinking MAchine</h2>
Search <input type='text' onChange={SearchCriteria} />
<PlacementList placementYear={placementYear} students={FilteredStudent} onStudentIsSelected={onStudentIsSelected} ref={placementListRef}/>
<br></br><br></br>
<PlacementDetail student={SelectedStudent} ref={DetailRef}/>
</div>
)
}

class PlacementList extends React.Component
{
constructor(props)
{
super(props)
this.state={
"students":props.students,
"placementYear":props.placementYear
}
this.onStudentIsSelected=props.onStudentIsSelected;
}
updateStudent(students)
{
this.setState({
"students":students
});

}


StudentClick=(ev)=>{
var student=null;
var studentId=ev.currentTarget.getAttribute("id")
for(var i=0; i<this.state.students.length; i++)
{
if(this.state.students[i].id==studentId)
{
student=this.state.students[i];
break;
}
}
if(student)
{
this.onStudentIsSelected(student);
}
}

render()
{
return(
<div>
PlacementYear-{this.state.placementYear}
<ul>
{this.state.students.map((student)=>{
return(<li key={student.id} id={student.id} onClick={this.StudentClick}>{student.name} ({student.company})</li>)
})}
</ul>
</div>
)
}
}

class PlacementDetail extends React.Component
{
constructor(props)
{
super(props)
this.state={
"student":props.student
}
}
updatestudents(student)
{
this.setState({
"student":student
})
}

render(){
return(
<div>
NAME :<b>{this.state.student.name}</b><br></br>
COMPANY :<b>{this.state.student.company}</b><br></br>
SALARY :<b>{this.state.student.salary}</b><br></br>
</div>
)
}
}

export default AppExample2;