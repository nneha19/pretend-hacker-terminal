
import '../App.css'
import { useEffect, useRef } from 'react';


function Input({onSubmit}) {
    
  const InputRef = useRef();

  useEffect(()=>{
    InputRef.current.focus();
  },[])

 const handleEnterKey = (e)=>{
    if(e.key=='Enter'){  
        e.preventDefault();
        const command = InputRef.current.innerText.trim();
            onSubmit(command)
        InputRef.current.innerText = "";  
        }
    
 }

  return (
    <form className="flex flex-row gap-2" >
       <label className="font-semibold">&gt;</label>
       <div contentEditable className='editable-terminal text-[#67EB4D]'  ref={InputRef} onKeyDown={handleEnterKey}></div>
    </form>
  )
}

export default Input