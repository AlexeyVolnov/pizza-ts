import React from 'react'
import './styles/index.css'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import './styles/_all.scss'
import {Provider} from "react-redux";
import store from "./store/store.tsx";
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
       <Provider store={store}>
          <BrowserRouter>
             <App/>
          </BrowserRouter>
       </Provider>

    </React.StrictMode>,
)
