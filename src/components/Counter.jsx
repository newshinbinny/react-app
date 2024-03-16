import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

export const Counter = () => {
  var [count,setCount]=useState("0")
    const incBtn=()=>{
        setCount(count+1)
    }
    const decBtn=()=>{
        if(count>0){
        setCount(count-1)
    }
    } 
    
  return (
    <div style={{paddingTop:"80px"}}>
      <Typography variant='h4'>Counter value:{count}</Typography>  
      <Button variant='contained' color='success'
      onClick={incBtn}>+</Button>&nbsp;
      <Button variant='contained' color='error'
      onClick={decBtn}>-</Button>
    </div>
  )
}
