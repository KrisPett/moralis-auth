import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MoralisProvider} from "react-moralis";

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const Application = () => {
    if (!APP_ID || !SERVER_URL) throw new Error("Missing Moralis Application ID or Server URL. Make sure to set your .env file.");
    return <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}><App/></MoralisProvider>
}

ReactDOM.render(
    <Application/>,
    document.getElementById('root')
);

reportWebVitals();
