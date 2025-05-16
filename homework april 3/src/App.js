
import {InfoComponent } from "./Components/InfoComponent"
import {ImgComponent } from "./Components/ImgComponent"
import {SkillsComponent} from "./Components/SkillsComponent"



const skills =[
{
namee: "javascript",
color: "yellow"
},
{name: "react",
  color: "yellow"
  },
  {name: "JSX",
    color: "yellow"
    }
];

function App (){
return(
<div className="App">
<div className="card"> 
 <ImgComponent
 src="https://nashvillevoyager.com/wp-content/uploads/2021/12/c-PersonalMariahRagland__1C6A38E76586410FA8E7D790FC89ADFD_1638027845061-1000x600.jpeg"
 />
   <InfoComponent
   name= "Earl"         
   info="hey hey hey it's fat albert" 
   />

<div style={{display: "flex",
  flexWrap: "wrap"
}}>
{skills.map((props)=>{
return(<SkillsComponent
name={props.name}
color={props.color}
/>
)
})}

</div>

 </div>
 </div>
);

}

export default App;