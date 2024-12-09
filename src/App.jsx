import './App.css'

import DemoBook from './DemoBook';

import {Telegram} from "@mui/icons-material";
import '@fontsource/roboto/400.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Table, TableFooter, TableBody, TableHead, TableCell,
        TableRow } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';

////////////////////////////////////////////////////////////////////  


export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#228CDB',
        // light: will be calculated from palette.primary.main,
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        main: '#0B7189',
        // dark: will be calculated from palette.secondary.main,
      },
      englishViolent: {
        main: '#4F345A',
      },
      tropicalIndigo: {
        main: '#9C95DC',
        dark: '#635e8ce0',
      },
      paleDogwood: {
        main: '#F4D6CC',
      },
    },
  });


  return (
    <>
      <ThemeProvider theme={theme}>

        <AppBar position='relative' sx={{ boxShadow:4 }} className='appBar' color="white">
          <Toolbar>
            <Button variant="contained" sx={{ border: 'none', outline:'0 !important' }}>Главная</Button>
          </Toolbar>
        </AppBar>

        <section className="headerMain">
          <Typography color='tropicalIndigo.dark' variant='h2'>
            Читалка
          </Typography>
        </section>

        <DemoBook/>

        <BottomNavigationAction label="Telegram" icon={<Telegram />}
              sx = {{ border:'none', outline:'0 !important', borderRadius:'50%' }} />

      </ThemeProvider>
    </>
  )
}
