import Button from '@mui/material/Button';
import theme from './theme'
import { ThemeProvider } from '@mui/material/styles';

export default function CreateButton() {
  return (
      <ThemeProvider theme = {theme}>
        <Button variant="contained" sx={{position: 'absolute', bottom: '5%', right: '5%',}}>Create</Button>
      </ThemeProvider>
  )
}