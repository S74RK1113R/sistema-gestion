import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './style/global.css'
import UserContextProvider from './context/UserContext.jsx'
import TableContextProvider from './context/TablesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <TableContextProvider>
        <App />
      </TableContextProvider>
    </UserContextProvider>
  </StrictMode>,
)
