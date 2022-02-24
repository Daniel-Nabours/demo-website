import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material';
 


const theme = createTheme();

ReactDOM.render( 
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
  </StyledEngineProvider>,
  document.getElementById('root')
)
