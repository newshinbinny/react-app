import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography>My App</Typography>&nbsp;&nbsp;
                <Button variant="contained" color="success">
        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          Login
        </Link>
      </Button>&nbsp;&nbsp;
      <Button variant="contained" color="error">
        <Link to={"/register"} style={{ textDecoration: "none", color: "white" }}>
          Register
        </Link>
      </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}
