import { render } from '@testing-library/react';
import React from 'react';



const students=[
    {"id":101,"name":"Ankit","company":"facebook","salary":"10 lpa"},
    {"id":102,"name":"Vishal","company":"Cognizent","salary":"14 lpa"},
    {"id":103,"name":"Priya","company":"Grow","salary":"17 lpa"},
    {"id":104,"name":"Bulbul","company":"Google","salary":"18 lpa"},
    {"id":105,"name":"Bhupendra","company":"enzigma","salary":"15 lpa"},
    ];
   

           

const App=()=>{

    
    const [SearchWhat,SetSearchWhat]=React.useState("nothing");
    
    const Search=(ev)=>{
    
    if(ev.currentTarget.value.length<3)
    {
    SetSearchWhat("nothing")
    return;
    }   
    SetSearchWhat(ev.currentTarget.value)
    }
    
    
    
    
    const FilteredStudents=students.filter((student)=>{
    
    if(SearchWhat==="nothing") return true;
    
       return student.company.toLowerCase().includes(SearchWhat.toLowerCase())
      }); 
    
      const [SelectedStudent,setSelectedStudent]=React.useState("");
     
     
      const justDoItCall=(student)=>{
          setSelectedStudent(student);
      }
     
             
         const [Title,setTitle]=React.useState("Thinking Machine Placements-");
    const [Year,setYear]=React.useState(2021);
    return(
    <div>
        <h2>Thinking Machine</h2>
        <SomeComponent Title={Title} Year={Year}/>
        <SearchBox tellp={Search} />
        Filtered By Company:{SearchWhat}
       <PlacementList students={FilteredStudents} justDoItCall={justDoItCall} />
        <StudentDetail student={SelectedStudent} />
    </div>
)
}

const SomeComponent=(props)=>{

    return(
        <div>
            <h4>{props.Title}{props.Year}</h4>
        </div>
    )
}


const SearchBox=(props)=>{
    
    const DoSomething=(ev)=>{
    props.tellp(ev);
        }


       


    return(
      
      
      
      <div>
            <label htmlFor="SearchB">Search:</label>
            <input type="text" id="SearchB" onChange={DoSomething}></input>
        </div>
    )
}






const PlacementList=(props)=>{

    const ClickHandler=(ev)=>{
        var student=null;
        var studentId=ev.currentTarget.getAttribute("id");
    for(var i=0;i<props.students.length;i++)
      {
       if(props.students[i].id==studentId)
       {
         student=props.students[i];
        
       } 
       if(student){
        props.justDoItCall(student);
        break;
       }
      }
    }

    return(
        <div>
            <ul>
            {
             props.students.map((student)=>{
                 return(<li key={student.id} id={student.id} onClick={ClickHandler} >{student.name} ({student.company})</li>)
             })
            }
            </ul>
        </div>
    )
}


const StudentDetail=(props)=>{
    return(
         <div>
               name:{props.student.name}<br></br> 
               company:{props.student.company}<br></br>
               salary:{props.student.salary}<br></br>  </div>
)
 }
export default App;