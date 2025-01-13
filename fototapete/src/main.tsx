import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { LangContextProvider } from './context/LangContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangContextProvider>
      <App />
    </LangContextProvider>
  </StrictMode>
)

// LangContextProvider - контекст для лингвистического окружения. 
// Доступ изнутри любого коп=мпонента: const { lang, toggleLang } = useContext(LangContext); 
// Перед этим импортировать LangContext и useContext