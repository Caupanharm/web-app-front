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
    grey: {
      main: '#2a2a2a',
      light: '#353535',
      dark: '#1d1d1d',
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
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.default
        })
      }
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.default,
          color: theme.palette.background.default,
          '&:hover': {
            backgroundColor: 'transparent',
            color: theme.palette.secondary.main,
          },
          '&:disabled': {
            backgroundColor: 'transparent',
            color: theme.palette.background.default
          }
        }),
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: ({ theme }) => ({
          backgroundColor: theme.palette.secondary.main,
        }),
      },
    },
    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&.Mui-selected': {
            color: theme.palette.secondary.main,
          }
        }),
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
    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: `1px solid ${theme.palette.divider}`,
          "&.firstAccordion": {
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            '& .MuiAccordionSummary-root': {
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px',
            },
            '& .MuiAccordionDetails-root': {
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px',
            },
          },
          "&.lastAccordion": {
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px',
            '& .MuiAccordionSummary-root': {
              borderBottomLeftRadius: '8px',
              borderBottomRightRadius: '8px',
            },
            '& .MuiAccordionDetails-root': {
              borderBottomLeftRadius: '8px',
              borderBottomRightRadius: '8px',
            },
          },
          "&::before": {
            display: "none",
          },
        }),
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          flexDirection: "row-reverse",
          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(3600000deg)",
          }
        }),
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(2),
          borderTop: "1px solid rgba(0, 0, 0, .125)",
          backgroundColor: theme.palette.grey.light,
          color: theme.palette.text.primary
        }),
        
      },
    },
  },
});

export default theme;
