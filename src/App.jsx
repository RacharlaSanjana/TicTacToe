/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react'

const App = () => {
  const [result,setResult]=useState('No One')
  const [prev,setPrev]=useState('X');
  const [char1,setChar]=useState('');
  const [char2,setChar2]=useState('');
  const [char3,setChar3]=useState('');
  const [char4,setChar4]=useState('');
  const [char5,setChar5]=useState('');
  const [char6,setChar6]=useState('');
  const [char7,setChar7]=useState('');
  const [char8,setChar8]=useState(''); 
  const [char9,setChar9]=useState('');
  const Setfunction1=()=>{
     if(prev==='X')
      {
        setChar('O');
        setPrev('O');
      }
      else
      {
        setChar('X');
        setPrev('X');
      }
  }
  const Setfunction2=()=>{
    if(prev==='X')
     {
       setChar2('O');
       setPrev('O');
     }
     else
     {
       setChar2('X');
       setPrev('X');
     }
 }
 const Setfunction3=()=>{
  if(prev==='X')
   {
     setChar3('O');
     setPrev('O');
   }
   else
   {
     setChar3('X');
     setPrev('X');
   }
}
const Setfunction4=()=>{
  if(prev==='X')
   {
     setChar4('O');
     setPrev('O');
   }
   else
   {
     setChar4('X');
     setPrev('X');
   }
}
const Setfunction5=()=>{
  if(prev==='X')
   {
     setChar5('O');
     setPrev('O');
   }
   else
   {
     setChar5('X');
     setPrev('X');
   }
}
const Setfunction6=()=>{
  if(prev==='X')
   {
     setChar6('O');
     setPrev('O');
   }
   else
   {
     setChar6('X');
     setPrev('X');
   }
}
const Setfunction7=()=>{
  if(prev==='X')
   {
     setChar7('O');
     setPrev('O');
   }
   else
   {
     setChar7('X');
     setPrev('X');
   }
}
const Setfunction8=()=>{
  if(prev==='X')
   {
     setChar8('O');
     setPrev('O');
   }
   else
   {
     setChar8('X');
     setPrev('X');
   }
}
const Setfunction9=()=>{
  if(prev==='X')
   {
     setChar9('O');
     setPrev('O');
   }
   else
   {
     setChar9('X');
     setPrev('X');
   }
}
  useEffect(()=>{
    if(char1==char2 && char2==char3 && char3==char1 &&char1!='')
      {
         setResult(char1)
      }
   else if(char4==char5 && char5==char6 && char6==char4 && char4!='')
    {
      setResult(char4)
    }
    else if(char7==char8 && char8==char9 && char9==char7 && char7!='')
      {
        setResult(char7)
      }
      else if(char1==char4 && char4==char7 && char7==char1 && char1!='')
        {
            setResult(char1)
        }
        else if(char2==char5 && char5==char8 && char8==char2 && char2!='')
          {
            setResult(char2)
          }
          else if(char3==char6 && char6==char9 && char9==char6 && char6!='')
            {
              setResult(char2)
            }
            else if(char1==char5 && char5==char9 && char9==char1 && char1!='')
              {
                setResult(char1)
              }
              else if(char3==char5 && char5==char7 && char7==char3 && char3!='')
                {
                  setResult(char3)
                }

  },[char1,char2,char3,char4,char5,char6,char7,char8,char9])
  return (
    <div>
     <div className='Container'>{result} Won the Match</div>
      <div className='row1'>
        <button onClick={Setfunction1} className='1'>{char1}</button>
        <button onClick={Setfunction2}  className='2'>{char2}</button>
        <button onClick={Setfunction3} className='3'>{char3}</button>
      </div>
      <div className='row2'>
        <button onClick={Setfunction4} className='4'>{char4}</button>
        <button onClick={Setfunction5} className='5'>{char5}</button>
        <button onClick={Setfunction6} className='6'>{char6}</button>
      </div>
      <div className='row3'>
        <button onClick={Setfunction7} className='7'>{char7}</button>
        <button onClick={Setfunction8} className='8'>{char8}</button>
        <button onClick={Setfunction9} className='9'>{char9}</button>
      </div>
    </div>
  )
}

export default App