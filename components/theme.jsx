import { createTheme } from '@mui/material/styles';
const theme = createTheme({

  palette: {
    shinku: {
      light: '#d9333f',
      main: '#ad002d',
      dark: '#a22041',
      contrastText: '#e9e4d4',
    },
    primary: {
      main: '#212121',
    },
    secondary:{
      main: '#212121',
    },
  },
});

export default theme