import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from './app/store'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const theme = createTheme({
  palette:{
    mode:'light',
    primary:{
      main:'#190019',
      dark:'#190019',
      light:'#2B124C',
      font:'#FBE4D8',
      light:{
        background:'#522B5B',
        card:'#522B5B',
        font:'#DFB6B2',
        font2:'#FBE4D8'
      },
      dark:{
        background:'#522B5B',
        card:'#2B124C',
        cardNone:'#854F6C',
        font:'#FBE4D8',
        icons:'#180019'
      },
    },
   
    
  },
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
      <App />
      </Provider>
 
    </ThemeProvider>
  </React.StrictMode>,
)
