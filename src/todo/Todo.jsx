import { useState } from "react";

function Todo(){
    

    const [inputvalue, setinputvalue]=useState("")
    const [Todoitems, setTodoitems]=useState([])
    function  handleinputvalue(event) 
    {
        console.log(event.target.value ,event);
        setinputvalue(event.target.value);
    }
    function addingvalue(){
        setTodoitems([...Todoitems,inputvalue]) 
        setinputvalue("");
    }
    const handledelete =(indexx)=>{
        Todoitems.filter(items,index)=>{
            indexx!==index
        }
      
    }
    
    console.log(Todoitems);  
    return(
        <>
        <input type="text" value={inputvalue} onChange={handleinputvalue} id="text" placeholder="enter todo list"/>
        <button onClick={addingvalue}>add</button>        
        {Todoitems.map((items,index)=>{
            return(
            
                <div key={index} style={{display:"flex"}}>
                    <p> {items} </p>
                    <button onClick= {(()=>{handledelete(index)})}>delete</button>

                </div>
            )
            
        })}
        </>
       )

}
export default Todo;