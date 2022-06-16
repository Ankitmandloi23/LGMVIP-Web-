import './App.css';
import React from 'react';




const App1=()=>{

    const [activeMode,setActiveMode]=React.useState("view");


    const onItemSelected=function(item)
    {
        if(item==="editorMode") 
        {
            setActiveMode("edit");
        }
        if(item==="home")
        {
            setActiveMode("view");
        }
    }
    


return(
<div>
<center><ToolBarComponent mode={activeMode} onItemSelected={onItemSelected}/></center>

{activeMode==="view" &&<HomeComponent />}

{activeMode==="edit" &&<EditorComponent />}


</div>
);
}

const ToolBarComponent=({onItemSelected,mode})=>{
const takeAction=(ev)=>{
onItemSelected(ev.currentTarget.getAttribute("t_a"));
}

    return(
    <div class="Button">
{mode==="edit" &&<button type='button' onClick={takeAction} t_a='home'>HOME</button>}
<button type='button'onClick={takeAction} t_a='editorMode'>Switch To Editor Mode</button>
</div>
)

}

const HomeComponent=()=>{
    return(
        <div>
           <center>
           <h1 class="HM1">ONLINE CODE-EDITOR</h1>
           <div>
           <h1 class='HM'>Hello Wellcome To Online Code Editor</h1>
           <p>You Can Write and Execute Your Code Here...<br></br>PLAESE CLICK EDITOR MODE BUTTON</p>
              </div>
              <h6 class="Hbottom">@2022 ankitMandloi23github.io. ALL rights reserved</h6>
              </center>
              </div>
              )
}

const EditorComponent=()=>{
    return(
        <div>ankit</div>
    )
}


export default App1;
