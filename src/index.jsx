import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SelectedDataProvider } from './providers/SelectedDataProvider'

const queryClient = new QueryClient({})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SelectedDataProvider>
        <App />
      </SelectedDataProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
