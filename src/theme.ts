import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#fdfd96',
      light: '#ffffb3',
      dark: '#c7c775'
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
