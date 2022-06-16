import React from 'react';
import './App.css';





function getData(){
var promise=new Promise((resolve)=>{

fetch("https://reqres.in/api/users?page=1").then((response)=>{
return response.json();
}).then((stud)=>{

//console.log("res",stud);

resolve(stud.data);
});
});

return promise;
}


const AppExample20=()=>{
 

const [elements,setElements]=React.useState([]);


const clickHand=()=>{


    const promise=getData();
    promise.then((stud)=>{

        //alert(JSON.stringify(stud));

        console.log(stud);
        setElements(stud);
        });				
    }   


return(
   
    <div class="backG">
         <center class="backO">
       
         <h4>---(Task 2 Of LetsGrowMore )---</h4>
         <button type='button' onClick={clickHand} class="button">GET DATA</button>
       
         <h2>Click Here To get Users Data</h2>
         <ul>
             {
              elements?elements.map(({id,email,first_name,last_name,avatar})=>{
              return(<div key={id} class="idCard"><img src={avatar} /><br></br>
             
              Id :&nbsp;&nbsp; {id}<br></br>
              First Name :&nbsp;&nbsp;  {first_name}<br></br>
              Last Name :&nbsp;&nbsp;   {last_name}<br></br>
              Email :&nbsp;&nbsp;   {email}<br></br>
              </div>)
             
            }):null
             }
         </ul>
         <h5>Thank You...</h5>
         
         </center>
   <div class="intro">ankitmandloi23@gmail.com</div>
   
   </div>
)}


export default AppExample20;