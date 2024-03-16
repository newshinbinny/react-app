import { Button, TextField } from '@mui/material'
import React from 'react'

export const Registrationpage = () => {
  return (
    <div style={{paddingTop:"80px"}}>
         Registeration Page<br/><br/>
        <TextField id="outlined-basic" label="Username" variant="outlined" /><br/><br/>
        <TextField id="outlined-basic" label="Email" variant="outlined" type='email' /><br /><br />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /><br/><br/>
        <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
        /><br/><br/>
        <TextField id="outlined-basic" label="Phone number" variant="outlined"
        type="number" /><br/><br/>
        <Button variant="outlined">Register</Button>
    </div>
  )
}
