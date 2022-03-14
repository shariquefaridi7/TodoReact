import {React,useState} from "react";
import "./Todo.css"

const Todo=()=>{
  
       
         const [data,setdata]=useState();       //First Hook  contain normal value
   
   const [fulldata,setfulldata]=useState([]);      //Second Hook contain array
  
    const change = (event) => {
    let value=event.target.value;       //input's function
    setdata(value);
    
    }
 
    const click = () => {
      
        setfulldata((olddata)=>{               //btn's function
            return[...olddata,data];
            
        });
       setdata("");
      
    };
    const cut=(id)=>{
        
        setfulldata((olddata)=>{
            return(olddata.filter((arr,inde)=>{                       // delete function
                                                         
                return id!==inde;
  
            }));
           
        });
          
         }

 return(
     <center>
    <div className="main_div">
        <h1 className="title">ToDoList</h1>
        <input type="text" placeholder="Enter the item" className="input" onChange={change} value={data}/>
        <button className="add" onClick={click}>+</button>
        <ol >
            {fulldata.map((value,index)=>{
               
            return(
                <>
             <button className="cut" onClick={()=>cut(index)}>⚔️</button>
             <li className="List">{value}</li>
             </>
            );
            })
      
            }
        
        </ol>







    </div>
    </center>





 );
      
    
}

export default Todo;

