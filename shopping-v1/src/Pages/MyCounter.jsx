import React,{ useState } from 'react'
//import CustomButton from '../components/CustomButton'

const MyCounter = () => {
    

    const[count, setCountFunction]= useState(0)
    
    const incc=()=> {
        setCountFunction(count+1)
        console.log(count)
    }
    const decc=()=> {
        if(count<1){
            alert("Negative integers not allowed")
        }
        else{
            setCountFunction(count-1)
        }
        console.log(count)
    }
    const mult=()=>{
        var prod=count*count;
        if(prod>2000)
        {
            alert("Maximum limit=2000")
        }
        else{
            setCountFunction(count*count)
        }
    }
  return (
    <div>
        <h2> Current value= {count}</h2>
        <div>
        <button onClick={incc}>Increment</button>
        <hr></hr>
        <button onClick={decc}>Decrement</button>
        <hr></hr>
        <button onClick={mult}>Multiply</button>
        </div>
    </div>
  )
}

export default MyCounter