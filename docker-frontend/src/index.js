import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import App from './App'
import './index.css'
import LoginView from './LoginView'
import RegisterView from './RegisterView'
import reportWebVitals from './reportWebVitals'
import store from './store'
import UserView from './UserView'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='login' element={<LoginView />} />
          <Route path='register' element={<RegisterView />} />
        </Route>
        <Route path='/user' element={<UserView />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
