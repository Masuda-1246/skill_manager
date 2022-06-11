import * as React from 'react';

import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export let title 
export let body 


export default function FormPropsTextFields() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [lang, setLang] = useState('')
  const [url, setURL] = useState('')

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
  
  return (
    <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
      <div>
        <TextField required id="title" label="Title" style ={{width: '50%'}} onChange={handleChangeTitle} value={title} />
        <TextField required id="language" label="Language" style ={{width: '50%'}}  onChange={handleChangeLang}  value={lang} />
        <TextField required id="url" label="URL" style ={{width: '50%'}}  onChange={handleChangeURL} value={url} />
        <TextareaAutosize required id="body" label="Body" type="text" style ={{width: '100%',height:400}}  onChange={handleChangeBody} value={body} />
      </div>  
    </Box>
  );
}


