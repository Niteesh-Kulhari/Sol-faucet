import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider.tsx'
import '@solana/wallet-adapter-react-ui/styles.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <App />
          </ThemeProvider>
  </StrictMode>,
)
