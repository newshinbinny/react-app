import { Button, TextField } from '@mui/material'
import React from 'react'

export const Loginpage = () => {
  return (
    <div style={{paddingTop:"80px"}}>
        Login Page<br/><br/>
        <TextField
          required
          id="outlined-required"
          label="Username"
        /><br/><br/>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /><br/><br/>
        <Button variant="outlined">Submit</Button>
    </div>
  )
}
