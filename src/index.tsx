import React from 'react';
import reportWebVitals from './reportWebVitals.ts';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

const {PUBLIC_URL} = process.env;

ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement
).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
        {/* <Provider store={store}> */}
          {/* <AuthProvider> */}
            {/* <App basename={''}  /> */}
            <App/>
          {/* </AuthProvider> */}
        {/* </Provider> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
