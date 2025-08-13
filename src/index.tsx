import React from 'react';
import ReactDOM from 'react-dom/client';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import ProductComponent from './components/productcomponent';
import reportWebVitals from './reportWebVitals';
import ProductHttpComponent from './components/producthttpcomponent';
import { BrowserRouter } from 'react-router-dom';
import MainRoutingComponent from './components/routingcomponents/mainroutingcomponent';
import { msalConfig } from "./components/routingcomponentsmsal/authConfig";
import MainRoutingMSALComponent from './components/routingcomponentsmsal/mainroutingcomponent';
import TableGridUserComponent from './components/tablegridusercomponent';
import ReactHookFormComponent from './components/reacthookform/reacthookformcomponent';

const msalInstance = new PublicClientApplication(msalConfig);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App  info='Hello World'/> */}
    {/* <ProductHttpComponent /> */}
    {/* <BrowserRouter>
      <MainRoutingComponent />
    </BrowserRouter> */}
    <ReactHookFormComponent />
  </React.StrictMode>
);

 
// root.render(
//   <MsalProvider instance={msalInstance}>
//      <BrowserRouter> 
//     <MainRoutingMSALComponent />
//     </BrowserRouter>
//   </MsalProvider>,
 
// )
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
