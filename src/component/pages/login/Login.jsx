import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import pic1 from "./images/pic1.png"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { display } from '@mui/system';
import { Alert, Button, TextField } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';


const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role='tabpanel' hidden={value !== index} >
      {
        value === index && (
          <Box>{children}</Box>
        )
      }
    </div>
  )
}

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

const Login = ({setToken}) => {
 
  const navigate = useNavigate();
  const [username, setUserName] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const handleSubmit = async e => {
    e.preventDefault();
    const token = {
      username,
      password
    }
    setToken(token);
    
    if(!(token === undefined)){
        navigate('/')
    }
  }
  
  return (
    <>
      <Grid container sx={{ height: '100vh' }}>
        <Grid item lg={7} sm={5} sx={{
          backgroundImage: `url(${pic1})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: { xs: 'none', sm: 'block' }
        }}>
        </Grid>
        <Grid item lg={5} sm={7} xs={12}>
          <Card sx={{ height: "100%", width: "100%" }} >
            {/* <Box sx={{ borderColor: "divider"}}>
              <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange} >
                <Tab label="Login"  sx={{textTransform: 'none', fontWeight: "bold"}}></Tab>
                <Tab label="Ragistration" sx={{textTransform: 'none', fontWeight: "bold"}}></Tab>
              </Tabs>
            </Box> */}
            {/* <TabPanel value={value}  ><Userlogin /></TabPanel> */}
            {/* <TabPanel value={value} index={1} ><Registration /></TabPanel> */}
            <Box component="form" noValidate sx={{ mt: 5, p:12 }} id="login-form" onSubmit={handleSubmit} >
              <TextField margin='normal'  onChange={(e) => setUserName(e.target.value)} required fullWidth id='email' name='email' label="Email Address" />
              <TextField margin='normal'  onChange={(e) => setPassword(e.target.value)} required fullWidth id='password' name='password' label="password" type="password" />
              <NavLink to='/' >Forgot Password ?</NavLink>
              <Box textAlign="center" >
                <Button type='submit' disabled={((username === undefined || "") || (password === undefined || "")) ? true : false} variant='contained' sx={{ mt: 5, mb: 2, px: 5 }} >Login</Button>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Login
