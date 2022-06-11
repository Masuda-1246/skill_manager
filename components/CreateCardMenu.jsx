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
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';

const SERVER_URL = "http://127.0.0.1:8000/"
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = [
  'Java',
  'C/C++/C#',
  'Python',
  'JavaScript',
  'Go',
  'Rust',
  'PHP',
  'Ruby',
  'Swift',
  'Unity',
  'Others',
];
export default function CreateCardMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [opens, setOpen] = React.useState(false);
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [lang, setLang] = useState([])
  const [url, setURL] = useState('')
  const [author, setAuthor] = useState('')

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
  const handleChangeAuthor = (e) => {
    author = e.target.value
    setAuthor(() => e.target.value)
  }

  const handleChangeBody = (e) => {
    body = e.target.value
    setBody(() => e.target.value)
  }

  const postData = () => {
    let language = ""
    lang.forEach((lan)=>{
      language+=lan
      language+=","
    })
    console.log(language)
    let json = {
      title:title,
      link:url,
      lang:language,
      body:body,
      author:author,
      created_at:'1111-11-11 11:11'}
    let post_json = JSON.stringify(json)
    console.log(post_json)
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
      <Button id="basic-button"  aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} variant="contained" className="bg-black float-right m-1"> CREATE</Button>
      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button', style: { width: 'auto', height: 600, },}}>
        <Box component="form"sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidateautoComplete="off">
          <div>
            <TextField required id="title" label="Title" style ={{width: '60%'}}  onChange={handleChangeTitle}  value={title} />
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label">Language</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={lang}
                onChange={handleChangeLang}
                input={<OutlinedInput label="Language" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={lang.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>                  
            <TextField required id="url" label="URL" style ={{width: '40%'}} onChange={handleChangeURL}  value={url} />
            <TextField required id="author" label="Author" style ={{width: '40%'}} onChange={handleChangeAuthor}  value={author} />
            <Box sx={{ border: 1 }}>
              <TextareaAutosize required id="body" label="Body" type="text" value={body} onChange={handleChangeBody} style ={{width: '100%',height:350}} sx={{ border: 1 }}/>
            </Box>
          </div> 
        </Box>
        <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={postData} onClose={handleClose} variant="contained"  className="bg-black m-1 float-right">CREATE</Button>
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={opens}><CircularProgress color="inherit" /></Backdrop>
      </Menu>
    </ThemeProvider>
  );
}

