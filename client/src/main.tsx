import React from 'react';
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import store from './redux/store';
import toast, { Toaster } from 'react-hot-toast';
import ToasterConfig from './components/toask/Toask.tsx';

const persistor = persistStore(store)

createRoot(document.getElementById('root')!).render(
  
  <Provider store={store}>

      <PersistGate loading={null} persistor={persistor}>
          <App />
          <ToasterConfig/>

      </PersistGate>
  </Provider>,
)
