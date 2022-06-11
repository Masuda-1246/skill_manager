import theme from './theme'
import { useState } from 'react'
import * as React from 'react';
import fetch from "node-fetch";
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const SERVER_URL = "http://127.0.0.1:8000/"

export default function CreateCardMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [opens, setOpen] = React.useState(false);
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [lang, setLang] = useState('')
  const [url, setURL] = useState('')

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeTitle = (e) => {
    title = e.target.value
    setTitle(() => e.target.value)
  }

  const handleChangeLang = (e) => {
    lang = e.target.value
    setLang(() => e.target.value)
  }

  const handleChangeURL = (e) => {
    url = e.target.value
    setURL(() => e.target.value)
  }

  const handleChangeBody = (e) => {
    body = e.target.value
    setBody(() => e.target.value)
  }

  const postData = () => {
    let json = {
      title:title,
      link:url,
      lang:lang,
      body:body,
      created_at:'1111-11-11 11:11'}
    let post_json = JSON.stringify(json)
    setOpen(!opens);
    fetch(`${SERVER_URL}api/post/`,{
      method: 'POST',
      body: post_json,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setTimeout(()=>{
      handleClose()
      setOpen(false);
      location.reload()
    },2000)
  }

  return (
    <ThemeProvider theme = {theme}>
      <Button id="basic-button"  aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} variant="contained"  sx={{ position: 'absolute', bottom: '1%', right: '1%', }}> CREATE</Button>
      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button', style: { width: 600, height: 600, },}}>
        <Box component="form"sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidateautoComplete="off">
          <div>
            <TextField required id="title" label="Title" style ={{width: '60%'}}  onChange={handleChangeTitle}  value={title} />
            <TextField required id="language" label="Language" style ={{width: '40%'}} onChange={handleChangeLang} value={lang} />
            <TextField required id="url" label="URL" style ={{width: '40%'}} onChange={handleChangeURL}  value={url} />
            <TextareaAutosize required id="body" label="Body" type="text" value={body} onChange={handleChangeBody} style ={{width: '100%',height:400}} />
          </div> 
        </Box>
        <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={postData} onClose={handleClose} variant="contained" sx={{ left: '80%',}}>CREATE</Button>
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={opens}><CircularProgress color="inherit" /></Backdrop>
      </Menu>
    </ThemeProvider>
  );
}

