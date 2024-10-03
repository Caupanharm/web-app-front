import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: { // yellow
      main: '#fdfd96',
      light: '#ffffb3',
      dark: '#c7c775'
    },
    green: {
      main: '#77DD77',
      light: '#A8E4A0', 
      dark: '#4BB74D',
    },
    red: {
      main: '#FF6961',
      light: '#FFB3B0',
      dark: '#E03E31',
    },
    background: {
      default: '#1d1d1d',
      paper: '#2a2a2a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
  },
  components: {
    MuiToolbar: {
        styleOverrides: {
            root: {
                backgroundColor: '#1d1d1d'
            }
        }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#1d1d1d',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#3a3a3a',
          },
        },
      },
    },
    MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: '#FDFD96',
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            '&.Mui-selected': {
              color: '#FDFD96',
            }
          },
        },
      },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            backgroundColor: '#FF0000',
            color: '#ffffff',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#424242',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ffffff',
          },
        },
      },
    },
  },
});

export default theme;
