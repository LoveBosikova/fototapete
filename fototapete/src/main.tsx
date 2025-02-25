import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { LangContextProvider } from './context/LangContext.tsx'
import './index.scss'
import { CurCategoryContextProvider } from './context/curCategoryContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangContextProvider>
      <CurCategoryContextProvider>
        <App />
      </CurCategoryContextProvider>
    </LangContextProvider>
  </StrictMode>
)

// LangContextProvider - контекст для лингвистического окружения. 
// Доступ изнутри любого коп=мпонента: const { lang, toggleLang } = useContext(LangContext); 
// Перед этим импортировать LangContext и useContext