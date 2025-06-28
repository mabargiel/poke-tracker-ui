import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import GlobalStyles from '@/GlobalStyles.ts'

import App from './App.tsx'
import { store } from './state/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
